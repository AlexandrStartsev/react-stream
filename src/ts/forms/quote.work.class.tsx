import * as React from "react";
import { ajaxFeed, ajaxRequired, AjaxChoiceInfo, ajaxCache } from "../api/ajaxCache";
import { ModelUtils } from "../api/proxy";
import { CoreCommVsProxy } from "../gen/impl/com.arrow.model.def.corecomm";
import { com } from "../gen/definitions";
import { Editbox, Dropdown, EditboxMoney, Radiolist, stringChoiceMaker, ValidationLabel } from "../api/generics";
import { ChoiceInfo, required, LogicNodeContext } from "../api/dfe-stream";
import { Pipe, Proxify, SwitchPipe } from "../api/react-connect";

import "../../../resources/dfe-style.css";
import "./quote.work.class.css";


type ICoreCommVs = com.arrow.model.def.corecomm.ICoreCommVs;
type ICoreCommWork = com.arrow.model.def.corecomm.work.ICoreCommWorkVs;
type ICoreCommWorkLocation = com.arrow.model.def.corecomm.work.location.ICoreCommWorkLocationVs;
type ICoreCommWorkClass = com.arrow.model.def.corecomm.work.location.ICoreCommWorkClass;
type ICoreCommWorkStopGapVs = com.arrow.model.def.corecomm.work.location.ICoreCommWorkStopGapVs;

const BbopStopGapLimit = com.arrow.model.def.corecomm.bbop.coverages.BbopStopGapLimit;
let {Fragment} = React;

declare var require: (moduleId: string | string[], cb?: Function) => any;
declare var ENV: {server: boolean}
if(!ENV.server) {
    require('webpack-jquery-ui/css');
    require("webpack-jquery-ui/dialog"); 
}


let states = Object.keys(com.arrow.model.common.States).sort().map(s => s.toUpperCase());
let simplyRequired = (ret: ChoiceInfo<string>) => required(ret)

const noSpecificDisabled = (state: string) => !!state.match(/^(MO|AZ|IN|IA|KY|MT|TX)$/);
const isMonopolisticState = (loc: ICoreCommWorkLocation) => !!loc.state.match(/^(WA|OH|ND|WY)$/);
const fixClassCount = (loc: ICoreCommWorkLocation) => isMonopolisticState(loc) ? loc.classes.forEach(ModelUtils.detach) : (loc.classes.length || loc.classes.push({}))

function stopGapSelectedForBop(sg: ICoreCommWorkStopGapVs) {
    const state = sg.p.state, covs = sg.p.p.p.bbopSet.coverages, nos = [BbopStopGapLimit.NULL, BbopStopGapLimit.NO_COVERAGE];
    switch(state.toUpperCase()) {
        case "WA": return nos.indexOf(covs.stopGapWA.limit) === -1;
        case "OH": return nos.indexOf(covs.stopGapOH.limit) === -1;
        case "ND": return nos.indexOf(covs.stopGapND.limit) === -1;
        case "WY": return nos.indexOf(covs.stopGapWY.limit) === -1;
    }
    return false;
}

const shouldDisablePayrollTextBox = (sg: ICoreCommWorkStopGapVs) => stopGapSelectedForBop(sg) || sg.includeInd === 'N';

const LocIndexField = Proxify((props:{model: ICoreCommWorkLocation}) => <td>{props.model.p.locations.indexOf(props.model)+1}</td>)

const AddressComponent = Pipe({get: (loc: ICoreCommWorkLocation) => loc.address, val: (value, loc) => loc.noSpecificLocation == 'Y' ? '' : required(value)})(
    props => <td>
        <Editbox 
            maxLength={50}
            style={{width: "calc(100% - 3px)", borderRadius: "1px", height: "18px"}}
            disabled={props.model.noSpecificLocation === 'Y'}
            value={props.data}
            set={value => props.model.addressLine = props.model.address = value}/>
        <ValidationLabel {...props}/>
    </td>
)

const CityComponent = Pipe({get: (loc: ICoreCommWorkLocation) => loc.city, val: (value, loc) => loc.noSpecificLocation == 'Y' ? '' : required(value)})(
    props => <td>
        <Editbox 
            style={{width: "calc(100% - 3px)", borderRadius: "1px", height: "18px"}}
            disabled={props.model.noSpecificLocation === 'Y'}
            value={props.data}
            pattern={/[a-zA-Z ]{1,45}/}
            set={value => props.model.city = value}/>
        <ValidationLabel {...props}/>
    </td>
)

const StateComponent = Pipe({get: (loc: ICoreCommWorkLocation) => stringChoiceMaker(loc.state, states), val: simplyRequired})(
    (props: {model: ICoreCommWorkLocation, context: LogicNodeContext, data?: ChoiceInfo<string>, processNoSpecificLocationChange: (loc: ICoreCommWorkLocation, context: LogicNodeContext, newState: string, newNoSpecificLocation: string) => void, error?: string}) => <td>
        <Dropdown 
            data={props.data} 
            set={val => props.processNoSpecificLocationChange(props.model, props.context, val, props.model.noSpecificLocation)}
            style={{width: "45px", borderRadius: "1px", height: "20px"}} />
        <ValidationLabel {...props}/>
    </td>
)

const ZipComponent = Pipe({get: (loc: ICoreCommWorkLocation) => loc.zip, val: (zip, loc) => loc.noSpecificLocation === "Y" ? "" : !zip ? "Required" : zip.match(/^\d{5}$/) ? "" : "Zip code is < 5 digits"})(props =>
    <td>
        <Editbox 
            style={{width: "calc(100% - 3px)", borderRadius: "1px", height: "18px"}}
            disabled={props.model.noSpecificLocation === 'Y'}
            value={props.data}
            pattern={/\d{1,5}/}
            set={value => props.model.zip = value}/>
        <ValidationLabel {...props}/>
    </td>
)

const NoSpecificComponent = Pipe()((props: {model: ICoreCommWorkLocation, context: LogicNodeContext, processNoSpecificLocationChange: (loc: ICoreCommWorkLocation, context: LogicNodeContext, newState: string, newNoSpecificLocation: string) => void}) =>
    <td style={props.model.state.match(/MO|AZ|IN|IA|KY|MT|TX/) ? {visibility: "hidden"} : {}} className="no-specific-field">
        <input type="checkbox" checked={props.model.noSpecificLocation === 'Y'} 
            onChange={event => props.processNoSpecificLocationChange(props.model, props.context, props.model.state, event.target.checked ? 'Y' : 'N')}/>
        No Specific
    </td>
)

const DeleteLoc = Proxify((props: {model: ICoreCommWorkLocation}) => <td>{props.model.p.locations.length>1 && <input type="button" onClick={() => ModelUtils.detach(props.model)} value="Delete"/>}</td>)

const StopGapIncludedComponent = Pipe({ get: (sg: ICoreCommWorkStopGapVs) => ({value: sg.includeInd, items: [{value: 'Y', description: "Yes"}, { value: 'N', description: "No"}]}), val: simplyRequired})(props =>
    <td>
        <Radiolist data={props.data} set={value => props.model.includeInd = value}/>
        <ValidationLabel error={props.error}/>
    </td>
)

const StopGapPayrollComponent = Pipe({ get: (sg: ICoreCommWorkStopGapVs) => sg.payroll, val: (value, sg) => !(shouldDisablePayrollTextBox(sg) || value) && "Required"})(props =>
    <td>
        <EditboxMoney 
            value={props.data} 
            set={value => props.model.payroll = value} 
            disabled={shouldDisablePayrollTextBox(props.model)}
            format="99,999,999"
            style={{width: 80, borderRadius: 1, height: 18}}
        />
        <ValidationLabel error={props.error}/>
    </td>
)

const Envelope = SwitchPipe((clazz: ICoreCommWorkClass) => !!clazz.code.match(/^\d{3,4}$/));

const ClassCodeComponent = Pipe({get: (clazz: ICoreCommWorkClass) => clazz.code, val: value => !value ? "Required" : value.match(/^\d{4}$/) ? "" : "Invalid format" })(props =>
    <td>
        <Editbox 
            value={props.data}
            set={value => props.model.code = value}
            pattern={/\d{1,4}/}
            style={{width: "50px", borderRadius: "1px", height: "18px"}}
        />
        <ValidationLabel {...props}/>
    </td>
)

const FTEmployeeComponent = Pipe({get: (clazz: ICoreCommWorkClass) => clazz.fulltimeemployeeamt, val: (value, clazz) => clazz.ifAny === "Y" || clazz.p.p.p.commonSet.quoteType !== "NB" || value ? "" : "Required" })(props =>
    <td>
        <Editbox 
            value={props.data}
            set={value => props.model.fulltimeemployeeamt = value}
            pattern={/\d{1,3}/}
            style={{width: "40px", borderRadius: "1px", height: "18px"}}
            disabled={props.model.ifAny === "Y"}
        />
        <ValidationLabel {...props}/>
    </td>
)

const PTEmployeeComponent = Pipe({get: (clazz: ICoreCommWorkClass) => clazz.parttimeemployeeamt, val: (value, clazz) => clazz.ifAny === "Y" || clazz.p.p.p.commonSet.quoteType !== "NB" || value ? "" : "Required" })(props =>
    <td>
        <Editbox 
            value={props.data}
            set={value => props.model.parttimeemployeeamt = value}
            pattern={/\d{1,3}/}
            style={{width: "40px", borderRadius: "1px", height: "18px"}}
            disabled={props.model.ifAny === "Y"}
        />
        <ValidationLabel {...props}/>
    </td>
)

const SeasonalEmployeeComponent = Proxify((props: {model: ICoreCommWorkClass}) =>
    <td>
        <Editbox 
            value={props.model.seasonalemployeeamt}
            set={value => props.model.seasonalemployeeamt = value}
            pattern={/\d{1,3}/}
            style={{width: "40px", borderRadius: "1px", height: "18px"}}
            disabled={props.model.ifAny === "Y"}
        />
    </td>
)

const PayrollComponent = Pipe({get: (clazz: ICoreCommWorkClass) => clazz.payroll, val: (value, clazz) => clazz.ifAny === "Y" || value ? "" : "Required" })(props =>
    <td>
        <EditboxMoney
            value={props.data}
            set={value => props.model.payroll = value}
            format="99,999,999"
            style={{width: "80px", borderRadius: "1px", height: "18px"}}
            disabled={props.model.ifAny === "Y"}
        />
        <ValidationLabel {...props}/>
    </td>
)

const IfAnyComponent = Proxify((props: {model: ICoreCommWorkClass}) =>
    <td style={{textAlign: "center"}}>
        <input type="checkbox" checked={props.model.ifAny === "Y"} 
            onChange={event => ModelUtils.copy(props.model, {
                ifAny: event.target.checked ? "Y" : "N", ...(event.target.checked ? { fulltimeemployeeamt: '', parttimeemployeeamt: '', seasonalemployeeamt: '', payroll: '' } : {})
            })}
            disabled={props.model.ifAny !== "Y" && props.model.p.p.locations.map(loc => loc.classes).reduce((tot, cur) => tot + cur.filter(cls => cls.ifAny !== "Y").length, 0) < 2}
        />
    </td>
)

const SubcodeComponent = Pipe<ICoreCommWorkClass, AjaxChoiceInfo<string>>({
    get: (clazz, context) => ajaxFeed(context, clazz.subcode, {
        query: {
            action: 'getSubcodes',
            classCode: clazz.code,
            effectiveDate: clazz.p.p.effective || '20180303',
            lob: 'WORK',
            state: clazz.p.state,
            method: 'WORKClassCodeScriptHelper'
        },
        mapper: v => ({
            value: v.combined as string,
            description: `${v.classCode} - ${v.description}`
        })
    }),
    val: ajaxRequired
})(props => 
    props.model.code.match(/^\d{3,4}$/) && <div style={{display: "flex", flexFlow: "column"}}>
        <Radiolist style={{padding: "2px 0px 0px 2px"}} data={{value: props.model.subcode, items: props.data.items}} set={value => props.model.subcode = value}/>
        <ValidationLabel error={props.error}/>
    </div>
)

const ClassRowComponent = Pipe({val: (clazz: ICoreCommWorkClass) => clazz.ifAny === "Y" && (clazz.fulltimeemployeeamt || clazz.parttimeemployeeamt || clazz.seasonalemployeeamt || clazz.payroll) ? "If Any is selected, you may not enter Employees or Payroll" : ""})(props => {
    let clazz = props.data, all = props.data.p.classes;
    return <Fragment>
        <tr>
            <td>{all.indexOf(clazz) + 1}</td>
            <ClassCodeComponent model={clazz}/>
            <FTEmployeeComponent model={clazz}/>
            <PTEmployeeComponent model={clazz}/>
            <SeasonalEmployeeComponent model={clazz}/>
            <PayrollComponent model={clazz}/>
            <IfAnyComponent model={clazz}/>
            { all.length > 1 &&
                <td style={{maxWidth: "50px"}}>
                    <input type="button" onClick={() => ModelUtils.detach(clazz)} value="Delete" />
                </td>
            }
        </tr>
        <tr>
            <td colSpan={8}>
                <Envelope model={clazz}>
                    <SubcodeComponent model={clazz}/>
                </Envelope>
            </td>
        </tr>
        <tr>
            <td colSpan={8}>
                <ValidationLabel error={props.error}/>
            </td>
        </tr>
    </Fragment>
}).to(ClassCodeComponent, FTEmployeeComponent, PTEmployeeComponent, PayrollComponent, Envelope.to(SubcodeComponent))

const ClassContainerComponent = Pipe({get: (loc: ICoreCommWorkLocation) => loc.classes})(props => 
    <table className="class-codes" style={{width: "100%"}}>
        <thead>
            <tr>
                <th colSpan={8} style={{backgroundColor: "#7e8083", color: "#fff", fontSize: "12px", textAlign: "center", fontWeight: "bold", lineHeight: "2em"}}>Class Informaton</th>
            </tr>
            <tr>
                <th>#</th>
                <th>Class Code</th>
                <th># F.T.
                    Employees</th>
                <th># P.T.
                    Employees</th>
                <th># Seasonal
                    Employees</th>
                <th>Est. Annual
                    Remuneration</th>
                <th style={{whiteSpace: "nowrap"}}>If any</th>
                <th></th>
            </tr>
        </thead>
        <tbody>{props.data.map(clazz => <ClassRowComponent key={clazz.key} model={clazz}/>)}</tbody>
    </table>
).to(ClassRowComponent)

const NonMonopolisticSwitch = Pipe({get: (loc: ICoreCommWorkLocation) => isMonopolisticState(loc) ? null : loc })(props =>
    props.data ? <Fragment>
        <tr>
            <td colSpan={7}>
                <ClassContainerComponent model={props.data}/>
            </td>
        </tr>
        <tr>
            <td colSpan={7} className="inline-section-header">
                <input type="button" onClick={() => props.data.classes.push({})} value="Add additional class" />
            </td>
        </tr>
    </Fragment> : null //  <input type="button" onClick={() => props.showAvailable(loc.p.effective, loc.state)} value="Available class code list"/>
).to(ClassContainerComponent)

const MonopolisticSwitch = Pipe({get: (loc: ICoreCommWorkLocation) => isMonopolisticState(loc) ? loc.stopGap : null })(props => 
    props.data ? <Fragment>
        <tr>
            <td colSpan={7}>
                <table className="stopgap-display" style={{width: "100%"}}>
                    <thead>
                        <tr><th colSpan={2} style={{backgroundColor: "#7e8083", color: "#fff", fontSize: "12px", textAlign: "center", fontWeight: "bold", lineHeight: "2em"}}>Stop Gap - Employers Liability</th></tr>
                        <tr><th>Add Coverage</th><th>Payroll</th></tr>
                    </thead>
                    <tbody>
                        <tr><StopGapIncludedComponent model={props.data}/><StopGapPayrollComponent model={props.data}/></tr>
                    </tbody>
                    <tfoot>
                        <tr><th colSpan={2}>{stopGapSelectedForBop(props.data) ? "This coverage has already been added in the BOP portion of the quote" : ""}</th></tr>
                        <tr><th colSpan={2} className="inline-section-header"></th></tr>
                    </tfoot>
                </table>
            </td>
        </tr>
    </Fragment> : null
).to(StopGapIncludedComponent, StopGapPayrollComponent)

const LocationRowComponent = Pipe()((props: {model: ICoreCommWorkLocation, processNoSpecificLocationChange: (loc: ICoreCommWorkLocation, context: LogicNodeContext, newState: string, newNoSpecificLocation: string) => void, showAvailable: (effectiveDt: string, state: string) => void}) => {
    let loc = props.model;
    return (
        <Fragment>
            <tr>
                <LocIndexField model={loc}/>
                <AddressComponent model={loc}/>
                <CityComponent model={loc}/>
                <StateComponent model={loc} processNoSpecificLocationChange={props.processNoSpecificLocationChange}/>
                <ZipComponent model={loc}/>
                <NoSpecificComponent model={loc} processNoSpecificLocationChange={props.processNoSpecificLocationChange}/>
                <DeleteLoc model={loc}/>
            </tr>
            <NonMonopolisticSwitch model={loc}/>
            <MonopolisticSwitch model={loc}/>
        </Fragment>
    )
}).to(AddressComponent, CityComponent, StateComponent, ZipComponent, NoSpecificComponent, NonMonopolisticSwitch, MonopolisticSwitch)

const LocationContainerComponent = Pipe({
    get: (work: ICoreCommWork) => work.locations,
    val: function(locs) {
        if(locs.length === 0) return "at least one location is required"
        let totalPayroll = locs.map(loc => loc.classes).reduce((tot, cur) => tot + cur.filter(cls => cls.ifAny !== 'Y').length, 0);
        let allMonopolistic = locs.every(isMonopolisticState);
        return totalPayroll === 0 && !allMonopolistic ? "There must be payroll present on the submission" : ""
    }
})((props: {
        model: ICoreCommWork, 
        addLocation: (locs: ICoreCommWorkLocation[]) => void, 
        processNoSpecificLocationChange: (loc: ICoreCommWorkLocation, context: LogicNodeContext, newState: string, newNoSpecificLocation: string) => void, 
        showAvailable: (effectiveDt: string, state: string) => void,
        error: string
        data: ICoreCommWorkLocation[]
    }) =>
        <Fragment>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th colSpan={7} style={{backgroundColor: "#7e8083", color: "#fff", fontSize: "12px", textAlign: "center", fontWeight: "bold", lineHeight: "2em"}}>Location Informaton</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th style={{width: "45%"}}>Street</th>
                        <th style={{width: "30%"}}>City</th>
                        <th>State</th>
                        <th style={{width: "70px", minWidth: "70px"}}>Zip Code</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>{ props.data.map(loc => <LocationRowComponent key={loc.key} model={loc} processNoSpecificLocationChange={props.processNoSpecificLocationChange} showAvailable={props.showAvailable}/>) }</tbody>
            </table>
            <button onClick={() => props.addLocation(props.data)}>Add additional location</button>
            <ValidationLabel {...props}/>
        </Fragment>
).to(LocationRowComponent)

const QuoteWorkClassComponent = Pipe({get: (root: ICoreCommVs) => root.policy.workSet})(
    class extends React.Component<{model: ICoreCommVs, data?: ICoreCommWork}> {
        private locationDefaults: ICoreCommWorkLocation
        private locationDefaults2: ICoreCommWorkLocation[]
        constructor(props: {model: ICoreCommVs, data: ICoreCommWork}) {
            super(props);
            let ref = props.model.insuredSet.address;
            this.locationDefaults = { address: ref.address, city: ref.city, state: ref.state, zip: ref.zip };
            this.locationDefaults2 = props.model.policy.bbopSet.locationList.map(ref => ({ address: ref.address, city: ref.city, state: ref.state, zip: ref.zip }))
            let locs = props.data.locations;
            locs.length || locs.push(this.locationDefaults);
            locs[0].classes.length || locs[0].classes.push({});
        }        
        addLocation(locs: ICoreCommWorkLocation[]) {
            let index = locs.length;
            let defaults: ICoreCommWorkLocation = this.locationDefaults2[index] || { state: this.locationDefaults.state };
            locs.push(defaults);
            locs[index].classes.push({});
        }
        processNoSpecificLocationChange(loc: ICoreCommWorkLocation, context: LogicNodeContext, newState: string, newNoSpecificLocation: string) {
            newNoSpecificLocation = newNoSpecificLocation || 'N';
            if (noSpecificDisabled(newState)) {
                newNoSpecificLocation = 'N';
            }
            if (newNoSpecificLocation === 'Y') {
                let thisLoc = loc, otherLocs = loc.p.locations.filter(loc => loc.state == newState && loc.noSpecificLocation === 'Y');
                let update = function (): void {
                    otherLocs.forEach(
                        otherLoc => (otherLoc.classes.forEach(clazz => (thisLoc.classes.push(clazz), ModelUtils.detach(clazz))), ModelUtils.detach(otherLoc))
                    );
                    ModelUtils.copy(loc, { noSpecificLocation: newNoSpecificLocation, address: '', city: '', zip: '', state: newState });
                    fixClassCount(loc);
                }
                if (otherLocs.length) {
                    $('<div>').text('Non-specific location for this state already exists. Would you like to merge?').dialog({
                        title: 'Question',
                        modal: true,
                        resizable: false,
                        close: function() {
                            context.reject();
                            $(this).dialog('destroy');
                        },
                        buttons: {
                            Yes: function() {
                                update();
                                $(this).dialog('destroy');
                            },
                            Cancel: function() { 
                                context.reject();
                                $(this).dialog('destroy');
                            }
                        }
                    });
                } else {
                    update();
                }
            } else {
                ModelUtils.copy(loc, {
                    state: newState,
                    noSpecificLocation: newNoSpecificLocation,
                    ...newNoSpecificLocation === 'N' && loc.noSpecificLocation === 'Y' && newState == this.locationDefaults.state ? this.locationDefaults : {}
                });
                fixClassCount(loc);
            }
        }
        showAvailable(effectiveDt: string, state: string){
            ajaxCache.get({ method: 'WORKClassCodeScriptHelper', action: 'getList', effectiveDate: effectiveDt, list: 'classcode', lob: 'WORK', state: state }).promise.then(
                data => $('<div>').text(data.result.map((e: any) => e.description).join('\n')).css('white-space', 'pre-wrap').dialog({
                    title: 'Available Class Code List',
                    width: 'auto',
                    height: 400,
                    close: function () {
                        $(this).dialog('destroy');
                    }
                })
            )
        }
        render() {
            return <div style={{width: 500}}>
                <LocationContainerComponent model={this.props.data} addLocation={this.addLocation.bind(this)} processNoSpecificLocationChange={this.processNoSpecificLocationChange.bind(this)} showAvailable={this.showAvailable.bind(this)}/>
            </div>
        }
    }
).to(LocationContainerComponent)

const QuoteWorkClassForm = QuoteWorkClassComponent.field;

export { QuoteWorkClassComponent as FormComponent, QuoteWorkClassForm as form, CoreCommVsProxy as modelImpl }