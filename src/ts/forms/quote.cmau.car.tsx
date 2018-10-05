import * as React from "react";
import { ajaxCache, ajaxFeed, ajaxRequired } from "../api/ajaxCache";
import { ProxyUtils, IArfSet } from "../api/proxy";
import { CoreCommVsProxy } from "../gen/impl/com.arrow.model.def.corecomm";
import { com } from "../gen/definitions";
import { Editbox, Dropdown, EditboxMoney, Radiolist, ValidationLabel, enumChoiceMaker, TabComponent, Checkbox } from "../api/generics";
import { Field, ChoiceInfo, required, ContextModel, PipeNode, LogicNode, Pick, Omit } from "../api/dfe-stream";
import { Pipe, Proxify, SwitchPipe } from "../api/react-connect";

import "../../../resources/dfe-style.css";
import "./quote.cmau.car.css"


if (typeof window !== "undefined") {
    (window as any)["showHelp"] = (url: string) => window.open(url, "DetailWin", "scrollbars=yes,resizable=yes,toolbar=no,height=250,width=250").focus()
}

type ICoreCommVs = com.arrow.model.def.corecomm.ICoreCommVs;
type ICoreCommCmauLocationVs = com.arrow.model.def.corecomm.cmau.location.ICoreCommCmauLocationVs;
type ICoreCommCmauCarVs = com.arrow.model.def.corecomm.cmau.location.car.ICoreCommCmauCarVs;
// Idk how to do it nicely ... 
type VehicleType = com.arrow.model.def.corecomm.cmau.location.car.VehicleType;
type VehicleClass = com.arrow.model.def.corecomm.cmau.location.car.VehicleClass;
type VehicleUse = com.arrow.model.def.corecomm.cmau.location.car.VehicleUse;
type OperatorExperience = com.arrow.model.def.corecomm.cmau.location.car.OperatorExperience;
type OperatorUse = com.arrow.model.def.corecomm.cmau.location.car.OperatorUse;
type TrailerType = com.arrow.model.def.corecomm.cmau.location.car.TrailerType;
type RadiusClass = com.arrow.model.def.corecomm.cmau.location.car.RadiusClass;
type SecondaryClass = com.arrow.model.def.corecomm.cmau.location.car.SecondaryClass;
type SecondaryClassType = com.arrow.model.def.corecomm.cmau.location.car.SecondaryClassType;
type GolfType = com.arrow.model.def.corecomm.cmau.location.car.GolfType;
type GolfUse = com.arrow.model.def.corecomm.cmau.location.car.GolfUse;
type MobileHomeType = com.arrow.model.def.corecomm.cmau.location.car.MobileHomeType;
type MotorHomeSize = com.arrow.model.def.corecomm.cmau.location.car.MotorHomeSize;
type ValuationMethod = com.arrow.model.def.corecomm.cmau.location.car.ValuationMethod;

const textValueMapper = (v: string|{text: string, value: string}) => ( typeof v ==='string'? {value: v, description: v} : {value: v.value, description: v.text} );
const simplyRequired = (arg: string|number) => required(arg)
const vehDetailsDisabled = (car: ICoreCommCmauCarVs) => car.hasvin === 'Y' && (!car.vinnumber || car.vinoverride !== 'Y')
const MakeSwitch = (test: (car: ICoreCommCmauCarVs) => boolean) => SwitchPipe(test);

const { ValuationMethod, MobileHomeType, MotorHomeSize, GolfType, GolfUse, VehicleType, VehicleUse, OperatorExperience, OperatorUse, VehicleClass, TrailerType, RadiusClass, SecondaryClass} = com.arrow.model.def.corecomm.cmau.location.car;
const VehicleUseItems = enumChoiceMaker(null, VehicleUse).items;
const OperatorExperienceItems = enumChoiceMaker(null, OperatorExperience).items;
const OperatorUseItems = enumChoiceMaker(null, OperatorUse).items;
const VehicleClassItems = enumChoiceMaker(null, VehicleClass).items;
const TrailerTypeItems = enumChoiceMaker(null, TrailerType).items;
const RadiusClassItems = enumChoiceMaker(null, RadiusClass).items;
const SecondaryClassItems = enumChoiceMaker(null, SecondaryClass).items;
const GolfTypeItems = enumChoiceMaker(null, GolfType).items;
const GolfUseItems = enumChoiceMaker(null, GolfUse).items;
const MobileHomeTypeItems = enumChoiceMaker(null, MobileHomeType).items;
const MotorHomeSizeItems = enumChoiceMaker(null, MotorHomeSize).items;
const TowlaborItems = [ { value: 'No Coverage', description: 'No Coverage' }, { value: '$50', description: '50' }, { value: '$100', description: '100' }, { value: '$200', description: '200' } ]
const YesNoItems = [{value: "Y", description: "Yes"}, {value: "N", description: "No"}];
const PipAddlItems = [{value: "Option 1", description: "Option 1"}, {value: "Option 2", description: "Option 2"}];

const carDefaults: ICoreCommCmauCarVs = {
    lossPayee: {
        lossPayeeIncludeInd: "N",
        additionalInsuredLessorIncludeInd: "N",
        haownInd: "N"
    },
    emplessor: "N",
    physDmgInd: "N",
    dumpingOpInd: "N",
    vinoverride: "N",
    hasvin: "Y",
    vinvalid: "N",
    custom: "N",
    useClassInd1: "N",
    useClassInd2: "N",
    coverages: {
        pipCoverage: {
            includeInd: "N"
        },
        liab: {
            includeInd: "Y"
        },
        towlabor: "No Coverage"
    }
};

interface TypeMap {name: string, btn?: string}
const typeMap: { [index: string]: TypeMap } = {
    [VehicleType.PrivatePassenger]: {
        name: "Private Passenger Type",
        btn: "Passenger Vehicles"
    },
    [VehicleType.Truck]: {
        name: "Trucks, Tractors and Trailers"
    },
    [VehicleType.Cart]: {
        name: "Golf Carts and Low Speed Vehicles"
    },
    [VehicleType.MobileHome]: {
        name: "Mobile Homes"
    },
    [VehicleType.Antique]: {
        name: "Antique Autos"
    }
};
const {Provider: VehTypeProvider, Consumer: VehTypeConsumer} = React.createContext({vehicleType: VehicleType.NULL});
const typeMapItems = Object.keys(typeMap).map(k => ({value: k as VehicleType, description: typeMap[k].name}));
const VehicleTypeSwitch = (type: VehicleType) => Pipe({get: (car: ICoreCommCmauCarVs) => car.vehicleType === type ? car : null })(
    (props: {model: ICoreCommCmauCarVs, children: React.ReactNode, data: ICoreCommCmauCarVs}) => props.data ? <VehTypeProvider value={{vehicleType: type}}>{props.children}</VehTypeProvider> : null
)

function vehProcessVin(car: ICoreCommCmauCarVs, context: ContextModel<ICoreCommCmauCarVs>) {
    return car.vinnumber.length == 17 ? context.await(ajaxCache.get({
        method: 'CMAUVehicleScriptHelper',
        action: 'getVinLookupResults',
        vinNumber: car.vinnumber
    }).promise.then(data => {
        let r = data.result, isTrailer = r.vehicleType == 'x';
        ProxyUtils.copy(car, r.isMatch ? {
            vinvalid: 'Y',
            vehicleType: isTrailer ? VehicleType.Truck : r.vehicleType,
            modelYr: r.vehicleYear,
            make: r.vehicleMake,
            modelInfo: r.vehicleModel,
            vehicleCostNew: r.vehicleCost,
            vinoverride: 'N',
            vehicleClass: isTrailer ? VehicleClass.Trailer : car.vehicleClass
        } : {
            vinvalid: 'N'
        });
    }, () => car.vinvalid = 'N')) : (car.vinvalid = 'N') && void 0;
}

type ApplyToAllConfing<D> = {
    get: (car: ICoreCommCmauCarVs, context?: ContextModel<ICoreCommCmauCarVs>) => D,
    set: (car: ICoreCommCmauCarVs, value: string) => void,
    validate?: boolean | ((value: D, proxy?: ICoreCommCmauCarVs, context?: ContextModel<ICoreCommCmauCarVs>) => string)
    label: string
    labelStyle?: React.CSSProperties
    pattern?: RegExp
    format?: string
}

const MakeAtoAComponent = function(params: ApplyToAllConfing<string|ChoiceInfo<string>>) { 
    return function<IP extends {model: ICoreCommCmauCarVs, data: ChoiceInfo<string>, value:string, set: (value: string) => void},X>
        (Clazz: ((new (props: IP) => React.Component<IP>) | ((props: IP) => any))&X ) {
        const store = (type: VehicleType, model: ICoreCommCmauCarVs, value: string|ChoiceInfo<string>) => 
            model.p.p.locationList.forEach(loc => loc.cars.forEach(to => type !== VehicleType.NULL && to.vehicleType !== type || params.set(to, typeof value === "string" ? value : value.value)));
        const val = typeof params.validate === "function" ? {val: params.validate} : params.validate ? {val: (s: string|ChoiceInfo<string>) => required(s)} : {}
        return Pipe({get: params.get, ...val})(
            (props: IP&{error?: string, data?: string|ChoiceInfo<string>}) => 
            <VehTypeConsumer>{info =>
                <tr>
                    <td style={params.labelStyle}>
                        {params.label}
                        <ValidationLabel error={props.error}/>
                    </td>
                    <td><Clazz {...props} {...typeof props.data==="string" ? {value: props.data} : {data: props.data}} set={params.set.bind(null, props.model)}/></td>
                    <td>
                        <input 
                            type="button" className="link-button" onClick={() => store(info.vehicleType, props.model, props.data)}
                            value={"Apply to all " + (info.vehicleType ? typeMap[info.vehicleType].btn || typeMap[info.vehicleType].name : "Vehicles")}
                        />
                    </td>
                </tr>
            }</VehTypeConsumer>
        ) as any as (new (props: {model: ICoreCommCmauCarVs}) => React.Component<{model: ICoreCommCmauCarVs}>)&{field: Field<ICoreCommCmauCarVs, any>, 
            with: (...other: (typeof React.Component)[]) => (new (props: {model: ICoreCommCmauCarVs}) => React.Component<{model: ICoreCommCmauCarVs}>)}
    }
}

const LocationTabComponent = Pipe({get: (root: ICoreCommVs) => root.policy.cmauSet.locationList})(props => 
    <TabComponent 
        style={{width: 900}}
        activeTabClass="tab-item tab-item-active"
        tabClass="tab-item"
        autoFocusNew={true}
        headerClass="tab-header"
        items={props.data}
        headerFactory={loc => <LocationHeaderComponent model={loc}/>}
        bodyFactory={loc => <LocationBodyComponent key={loc.key} model={loc}/>}
    />
)

const LocationHeaderComponent = Pipe<ICoreCommCmauLocationVs>({errorwatch: "peers"})(props =>
    <div className="div-button">
        <label className="div-button-text">
            <a style={{color: "#444"}}>{`Location #${props.data.p.locationList.indexOf(props.data) + 1}`}</a><br/>
            {`${props.data.city} ${props.data.state} ${props.data.zip}-${props.data.zipAddOn}`.replace(/-$/, '')}
            <ValidationLabel error={props.error}/>
        </label>
    </div>
)

const LocationCount = Proxify((props: {model: ICoreCommCmauLocationVs}) => <div style={{display: "inline"}}>{"Location #" + (props.model.p.locationList.indexOf(props.model) + 1)}</div>)

let focusVin = false;
const LocationBodyComponent = Pipe<ICoreCommCmauLocationVs>()(props =>
    <React.Fragment>
        <div className="inline-section-header" style={{display: "inline-block", width: "100%", boxSizing: "border-box"}}>
            <LocationCount model={props.data}/>
            <div style={{display: "inline-block", float: "right"}}>
                <input style={{padding: "1px 10px"}} type="button" value="Add Vehicle" onClick={() => (props.data.cars.push(carDefaults), focusVin = true)}/>
            </div>
        </div>
        <div><CarTabComponent model={props.data}/></div>
    </React.Fragment>
)

const CarTabComponent = Pipe({get: (loc: ICoreCommCmauLocationVs) => loc.cars})(props => 
    <TabComponent 
        style={{width: "100%"}}
        activeTabClass="tab-item tab-item-active"
        tabClass="tab-item"
        autoFocusNew={true}
        headerClass="tab-header"
        items={props.data}
        headerFactory={car => <CarHeaderComponent model={car}/>}
        bodyFactory={car => <CarBodyComponent key={car.key} model={car}/>}
    />
)
 
const CarHeaderComponent = Pipe<ICoreCommCmauCarVs>({errorwatch: "peers"})(props =>
    <div className="div-button">
        <label className="div-button-text">
            {`${props.data.p.state} - Vehicle #${props.data.p.cars.indexOf(props.data) + 1}`}<br/>{`${props.data.modelYr} ${props.data.make}`}
            <ValidationLabel error={props.error}/>
        </label>
    </div>
)

const CarCount = Proxify((props: {model: ICoreCommCmauCarVs}) => <div className="inline-section-header"><div>{"Vehicle #" + (props.model.p.cars.indexOf(props.model) + 1)}</div></div>)
const CarControls = Proxify((props: {model: ICoreCommCmauCarVs}) => 
    <div className="inline-section-header" style={{display: "inline-block", width: "100%", boxSizing: "border-box"}}>
        <div style={{display: "inline-block", float: "right"}}>
            <input type="button" value="Clone Vehicle" onClick={() => (props.model.p.cars.push(props.model), focusVin = props.model.hasvin === 'Y')} style={{padding: "1px 10px", margin: "0px 5px"}}/>
        </div>
        <div style={{display: props.model.p.cars.length > 1 ? "inline-block" : "none", float: "right"}}>
            <input type="button" value="Remove Vehicle" onClick={() => ProxyUtils.detach(props.model)} style={{padding: "1px 10px", margin: "0px 5px"}}/>
        </div>
    </div>
)
const CarBodyComponent = Pipe<ICoreCommCmauCarVs>()(props =>
    <React.Fragment>
        <CarCount model={props.data}/>
        <GenInfo.Sheet model={props.data}/>
        <Private.Switch model={props.data}>
            <Private.Sheet model={props.data}/>
        </Private.Switch>
        <Truck.Switch model={props.data}>
            <Truck.Sheet model={props.data}/>
        </Truck.Switch>
        <Cart.Switch model={props.data}>
            <Cart.Sheet model={props.data}/>
        </Cart.Switch>
        <Mobile.Switch model={props.data}>
            <Mobile.Sheet model={props.data}/>
        </Mobile.Switch>
        <Coverages.Sheet model={props.data}/> 
        <Optional.Sheet model={props.data}/>
        <CarControls model={props.data}/>
    </React.Fragment>
)
namespace GenInfo {
    const DoYouHaveVinComponent = Proxify((props: {model: ICoreCommCmauCarVs}) => <tr><td>Do you have the VIN?</td><td><Radiolist data={{value: props.model.hasvin, items: YesNoItems}} set={value => props.model.hasvin = value}/></td></tr>)
    const OverrideComponent = Proxify((props: {model: ICoreCommCmauCarVs}) => props.model.hasvin !== "Y" || props.model.vinvalid == "Y" || !props.model.vinnumber ? null : <tr><td style={{paddingLeft: 16}}>Override VIN?</td><td><Radiolist data={{value: props.model.vinoverride, items: YesNoItems}} set={value => props.model.vinoverride = value}/></td></tr>)
    const CustomInfoComponent = Proxify((props: {model: ICoreCommCmauCarVs}) => vehDetailsDisabled(props.model) ? null : <tr><td style={{paddingLeft: 16}}>Vehicle Year, Make and/or Model is not available in dropdown</td><td><Radiolist data={{value: props.model.custom, items: YesNoItems}} set={value => props.model.custom = value}/></td></tr>)
    const VinNumberComponent = Pipe({get: (car: ICoreCommCmauCarVs) => ({ hasvin: car.hasvin, vin: car.vinnumber, valid: car.vinvalid, override: car.vinoverride }), val: info => info.override === "Y" ? "" : required(info.vin) || required(info.vin, /[a-zA-Z0-9]{17}/, "Invalid VIN format") || (info.valid == "Y" ? "" : "Vin not found")})(
        props => <tr>
            <td>Vihicle Identification Number (VIN)<ValidationLabel error={props.error}/></td>
            <td><Editbox 
                refUi={dom => dom && focusVin && (dom.focus(), dom.select(), focusVin = false)}
                value={props.data.vin}
                set={value => props.model.vinnumber = value} 
                spellCheck={false}
                disabled={props.data.hasvin !== "Y"}
                style={{width: 150, textTransform: "uppercase", display: "block"}}
                pattern={/[a-zA-Z0-9]{1,17}/}
            />{props.data.valid === "Y" || !props.data.vin ? null : "vin not found"}</td>
        </tr>
    )
    const VehicleTypeComponent = Pipe({get: (car: ICoreCommCmauCarVs) => ({value: car.vehicleType, items: typeMapItems}), val: info => required(info)})(
        props => <tr>
            <td>Vehicle Type<ValidationLabel error={props.error}/></td>
            <td><Dropdown data={props.data} set={value => props.model.vehicleType = value} emptyOption={true}/></td>
        </tr>
    )
    const VehicleModerYearComponent = Pipe({get: (car: ICoreCommCmauCarVs, context) => vehDetailsDisabled(car) || car.custom === "Y" ? 
        car.modelYr : ajaxFeed(context, car.modelYr, {
            query: { vehicleType: car.vehicleType, method: "CMAUVehicleScriptHelper", action: "getYearOptions"
        }, mapper: textValueMapper}),
        val: (value: string) => required(value, /(18|19|20)\d{2}/)}
    )(props => 
        <tr>
            <td><a href="javascript:showHelp('/cmau_help.html#year')" className="css-qmark"></a>Vehicle Year<ValidationLabel error={props.error}/></td>
            <td>{typeof props.data === "object" ? <Dropdown data={props.data} set={value => props.model.modelYr = value} emptyOption={true}/> : 
            <Editbox set={value => props.model.modelYr = value} pattern={/\d{1,4}/} value={props.data} disabled={vehDetailsDisabled(props.model)} style={{width: 150, textTransform: "uppercase"}} spellCheck={false}/>
            }</td>
        </tr>
    )
    const VehicleMakeComponent = Pipe({get: (car: ICoreCommCmauCarVs, context) => vehDetailsDisabled(car) || car.custom === "Y" ? 
        car.make : ajaxFeed(context, car.make, {
            query: { vehicleType: car.vehicleType, vehicleYear: car.modelYr, method: "CMAUVehicleScriptHelper", action: "getMakeOptions"
        }, mapper: textValueMapper}),
        val: (value: string) => required(value, /[-\w ]{1,50}/)
    })(props => 
        <tr>
            <td><a href="javascript:showHelp('/cmau_help.html#make')" className="css-qmark"></a>Vehicle Make<ValidationLabel error={props.error}/></td>
            <td>{typeof props.data === "object" ? <Dropdown data={props.data} set={value => props.model.make = value} emptyOption={true}/> : 
            <Editbox set={value => props.model.make = value} value={props.data} disabled={vehDetailsDisabled(props.model)} style={{width: 150, textTransform: "uppercase"}} spellCheck={false}/>
            }</td>
        </tr>
    )
    const VehicleModelComponent = Pipe({get: (car: ICoreCommCmauCarVs, context) => vehDetailsDisabled(car) || car.custom === "Y" ? 
        car.modelInfo : ajaxFeed(context, car.modelInfo, {
            query: { vehicleType: car.vehicleType, vehicleYear: car.modelYr, vehicleMake: car.make, method: "CMAUVehicleScriptHelper", action: "getModelOptions"
        }, mapper: textValueMapper}),
        val: (value: string) => required(value, /[-\w ]{1,50}/)
    })(props => 
        <tr>
            <td><a href="javascript:showHelp('/cmau_help.html#model')" className="css-qmark"></a>Vehicle Model<ValidationLabel error={props.error}/></td>
            <td>{typeof props.data === "object" ? <Dropdown data={props.data} set={value => props.model.modelInfo = value} emptyOption={true}/> : 
            <Editbox set={value => props.model.modelInfo = value} value={props.data} disabled={vehDetailsDisabled(props.model)} style={{width: 150, textTransform: "uppercase"}} spellCheck={false}/>
            }</td>
        </tr>
    )
    const OriginalCostComponent = Pipe({get: (car: ICoreCommCmauCarVs) => car.vehicleCostNew, val: simplyRequired})(
        props => <tr>
            <td>Original Cost New<ValidationLabel error={props.error}/></td>
            <td><EditboxMoney 
                value={props.data}
                set={value => props.model.vehicleCostNew = value}
                disabled={vehDetailsDisabled(props.model)}
                style={{width: 150}}
                format="$9,999,999"
            /></td>
        </tr>
    )
    export const Sheet = Pipe<ICoreCommCmauCarVs>({get: (car, context) => (car.hasvin === 'Y' && vehProcessVin(car, context), car)}) (props => {
        const car = props.data;
        return <div className="dfe-inline-section">
            <table className="dfe-table tab-cols-5-5">
                <tbody>
                    <DoYouHaveVinComponent model={props.data}/>
                    <VinNumberComponent model={props.data}/>
                    <OverrideComponent model={props.data}/>
                    <CustomInfoComponent model={props.data}/>
                    <VehicleTypeComponent model={props.data}/>
                    <VehicleModerYearComponent model={props.data}/>
                    <VehicleMakeComponent model={props.data}/>
                    <VehicleModelComponent model={props.data}/>
                    <OriginalCostComponent model={props.data}/>
                </tbody>
            </table>
        </div>
    }).to(VinNumberComponent, VehicleTypeComponent, VehicleModerYearComponent, VehicleMakeComponent, VehicleModelComponent, OriginalCostComponent)
}
namespace Private {
    const PPUsageComponent = MakeAtoAComponent({
        get: car => ({value: car.vehUseCd, items: VehicleUseItems}), set: (car, value: VehicleUse) => car.vehUseCd = value,
        label: "Usage",
        validate: true
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const OperatorExperienceComponent = MakeAtoAComponent({
        get: car => ({value: car.operExp, items: OperatorExperienceItems}), set: (car, value: OperatorExperience) => car.operExp = value,
        validate: true,
        label: "Operator Experience",
        labelStyle: {paddingLeft: 16}
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const OperatorUseComponent = MakeAtoAComponent({
        get: car => ({value: car.operUse, items: OperatorUseItems}), set: (car, value: OperatorUse) => car.operUse = value,
        validate: true,
        label: "Operator Use",
        labelStyle: {paddingLeft: 16}
    })(props => <Dropdown {...props} emptyOption={true}/>)
    
    const PPNonBusSwitch = MakeSwitch(car => car.vehUseCd === VehicleUse.NonBusiness).to(OperatorExperienceComponent, OperatorUseComponent);

    export const Sheet = Pipe<ICoreCommCmauCarVs>() (props => 
        <React.Fragment>
            <div className="inline-section-header"><div>Private Passenger Auto</div></div>
            <div className="dfe-inline-section">
                <table className="dfe-table col-3-centred tab-cols-2-5-3">
                    <tbody>
                        <PPUsageComponent model={props.data}/>
                        <PPNonBusSwitch model={props.data}>
                            <OperatorExperienceComponent model={props.data}/>
                            <OperatorUseComponent model={props.data}/>
                        </PPNonBusSwitch>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ).to(PPUsageComponent, PPNonBusSwitch)

    export const Switch = VehicleTypeSwitch(VehicleType.PrivatePassenger).to(Sheet);
}
namespace Truck {
    const VehicleClassComponent = MakeAtoAComponent({
        get: car => ({value: car.vehicleClass, items: VehicleClassItems}), set: (car, value: VehicleClass) => car.vehicleClass = value,
        validate: true,
        label: "Vehicle Class"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const TrailerSwitch = MakeSwitch(car => car.vehicleClass == VehicleClass.Trailer)

    const TrailerTypeComponent = MakeAtoAComponent({
        get: car => ({value: car.trailerType, items: TrailerTypeItems}), set: (car, value: TrailerType) => car.trailerType = value,
        validate: true,
        label: "Trailer Type"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const UseClass1Component = MakeAtoAComponent({
        get: car => ({value: car.useClassInd1, items: YesNoItems}), set: (car, value: string) => car.useClassInd1 = value,
        validate: true,
        label: "Is this auto used for transporting personnel, tools and equipment to and from a job location where it is parked for the majority of the day?"
    })(props => <Radiolist {...props}/>)

    const UseClass2Component = MakeAtoAComponent({
        get: car => ({value: car.useClassInd2, items: YesNoItems}), set: (car, value: string) => car.useClassInd2 = value,
        validate: true,
        label: "Is this auto used for transporting personnel, tools and equipment to and from a job location where it is parked for the majority of the day?"
    })(props => <Radiolist {...props}/>)

    const RadiusClassComponent = MakeAtoAComponent({
        get: car => ({value: car.radiusClass, items: RadiusClassItems}), set: (car, value: RadiusClass) => car.radiusClass = value,
        validate: true,
        label: "Radius"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const DumpingOptionComponent = MakeAtoAComponent({
        get: car => car.dumpingOpInd, set: (car, value: string) => car.dumpingOpInd = value,
        validate: false,
        label: "Used in dumping"
    })(props => <Checkbox {...props}/>)

    const SecondaryClassComponent = MakeAtoAComponent({
        get: car => ({value: car.secondaryClass, items: SecondaryClassItems}), set: (car, value: SecondaryClass) => car.secondaryClass = value,
        validate: true,
        label: "Secondary Class"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const SecondaryClassType = MakeAtoAComponent({
        get: (car, context) => ajaxFeed(context, car.secondaryClassType, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getSecondaryClassTypeOptions',
                secondaryClass: car.secondaryClass
            },
            mapper: (v: {text: string, value: string}) => ({value: v.value as SecondaryClassType, description: v.text})
        }), set: (car, value: SecondaryClassType) => car.secondaryClassType = value,
        validate: ajaxRequired,
        label: "Secondary Class Type"
    })(props => <Dropdown {...props} emptyOption={true}/>)   

    export const Sheet = Pipe<ICoreCommCmauCarVs>() (props => 
        <React.Fragment>
            <div className="inline-section-header"><div>Trucks, Tractors and Trailers</div></div>
            <div className="dfe-inline-section">
                <table className="dfe-table col-va-middle col-3-centred tab-cols-3-4-3">
                    <tbody>
                        <VehicleClassComponent model={props.data}/>
                        <TrailerSwitch model={props.data}>
                            <TrailerTypeComponent model={props.data}/>
                        </TrailerSwitch>
                        <UseClass1Component model={props.data}/>
                        <UseClass2Component model={props.data}/>
                        <RadiusClassComponent model={props.data}/>
                        <DumpingOptionComponent model={props.data}/>
                        <SecondaryClassComponent model={props.data}/>
                        <SecondaryClassType model={props.data}/>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ).to(VehicleClassComponent, TrailerSwitch.to(TrailerTypeComponent), UseClass1Component, UseClass2Component, RadiusClassComponent, DumpingOptionComponent, SecondaryClassComponent, SecondaryClassType)
    
    export const Switch = VehicleTypeSwitch(VehicleType.Truck).to(Sheet);
}
namespace Cart {
    const TypeComponent = MakeAtoAComponent({
        get: car => ({value: car.golfType, items: GolfTypeItems}), set: (car, value: GolfType) => car.golfType = value,
        validate: true,
        label: "Type"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const UseComponent = MakeAtoAComponent({
        get: car => ({value: car.golfUse, items: GolfUseItems}), set: (car, value: GolfUse) => car.golfUse = value,
        validate: true,
        label: "Use"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const SubjectToLawComponent = MakeAtoAComponent({
        get: car => car.golfVhsub, set: (car, value: string) => car.golfVhsub = value,
        validate: false,
        label: "Vehicle subject to compulsory, financial or other law"
    })(props => <Checkbox {...props}/>)    

    export const Sheet = Pipe<ICoreCommCmauCarVs>() (props => 
        <React.Fragment>
            <div className="inline-section-header"><div>Golf Carts and Low Speed Vehicles</div></div>
            <div className="dfe-inline-section">
                <table className="dfe-table col-3-centred tab-cols-4-3-3">
                    <tbody>
                        <TypeComponent model={props.data}/>
                        <UseComponent model={props.data}/>
                        <SubjectToLawComponent model={props.data}/>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ).to(TypeComponent, UseComponent, SubjectToLawComponent)

    export const Switch = VehicleTypeSwitch(VehicleType.Cart).to(Sheet);
}
namespace Mobile {
    const TypeComponent = MakeAtoAComponent({
        get: car => ({value: car.mobileHomeType, items: MobileHomeTypeItems}), set: (car, value: MobileHomeType) => car.mobileHomeType = value,
        validate: true,
        label: "Type"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const LengthComponent = MakeAtoAComponent({
        get: car => ({value: car.motorHomeSize, items: MotorHomeSizeItems}), set: (car, value: MotorHomeSize) => car.motorHomeSize = value,
        validate: true,
        label: "Length"
    })(props => <Dropdown {...props} emptyOption={true}/>) 
    
    const LengthSwitch = MakeSwitch( car => car.mobileHomeType === MobileHomeType.MotorHome).to(LengthComponent)

    export const Sheet = Pipe<ICoreCommCmauCarVs>() (props => 
        <React.Fragment>
            <div className="inline-section-header"><div>Mobile Homes</div></div>
            <div className="dfe-inline-section">
                <table className="dfe-table col-3-centred tab-cols-2-5-3">
                    <tbody>
                        <TypeComponent model={props.data}/>
                        <LengthSwitch model={props.data}>
                            <LengthComponent model={props.data}/>
                        </LengthSwitch>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ).to(TypeComponent, LengthSwitch)

    export const Switch = VehicleTypeSwitch(VehicleType.MobileHome).to(Sheet);
}
namespace Coverages {
    const PhysicalDmgOnlyComponent = MakeAtoAComponent({
        get: car => car.physDmgInd, set: (car, value: string) => car.physDmgInd = value,
        validate: false,
        label: "Physical Damage Only?"
    })(props => <Checkbox {...props}/>)

    const CompDedComponent = MakeAtoAComponent({
        get: (car, context) => ajaxFeed(context, car.coverages.comprehensiveDeductible, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getCompDedOptions',
                vehicleType: car.vehicleType
            },
            mapper: textValueMapper
        }), set: (car, value: string) => car.coverages.comprehensiveDeductible = value,
        validate: ajaxRequired,
        label: "Comp. Ded"
    })(props => <Dropdown {...props} emptyOption={true}/>)
    
    const CollDedComponent = MakeAtoAComponent({
        get: (car, context) => ajaxFeed(context, car.coverages.collisionDeductible, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getCollDedOptions',
                vehicleType: car.vehicleType
            },
            mapper: textValueMapper
        }), set: (car, value: string) => car.coverages.collisionDeductible = value,
        validate: ajaxRequired,
        label: "Coll. Ded"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const ValuationComponent = MakeAtoAComponent({
        get: (car, context) => ajaxFeed(context, car.valuationMethod, {
            query: {
                method: 'CMAUVehicleScriptHelper',
                action: 'getValuationMethodOptions',
                vehicleType: car.vehicleType
            },
            mapper: (v: {text: string, value: string}) => ({value: v.value as ValuationMethod, description: v.text} )
        }), set: (car, value: ValuationMethod) => car.valuationMethod = value,
        validate: ajaxRequired,
        label: "Valuation"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const StatedAmoutComponent = MakeAtoAComponent({
        get: car => car.statedAmt, set: (car, value: string) => car.statedAmt = value,
        validate: true,
        label: "Stated Amount"
    })(props => <EditboxMoney format="$9,999,999" style={{width: 100}} {...props}/>)
    
    const StatedAmoutSwitch = MakeSwitch(car => car.valuationMethod == ValuationMethod.Stated_Amount).to(StatedAmoutComponent)
    const ValuationSwitch = MakeSwitch(car => !!(car.coverages.collisionDeductible + car.coverages.comprehensiveDeductible).match(/\d|Full/)).to(ValuationComponent, StatedAmoutSwitch)

    const PipComponent = MakeAtoAComponent({
        get: car => car.coverages.pipCoverage.includeInd, set: (car, value: string) => car.coverages.pipCoverage.includeInd = value,
        validate: false,
        label: "Personal Injury Protection Coverage"
    })(props => <Checkbox {...props}/>)

    // used to be ".coverages.pip.addedpipoption", now ".car.coverages.pip.ks.addedpipoption" and is not mapped in model
    const AddlPipComponent = MakeAtoAComponent({
        get: car => ({ value: "", items: PipAddlItems }), set: (car, value) => void 0,
        validate: false,
        label: "Additional Personal Injury Protection",
        labelStyle: {paddingLeft: 16}
    })(props => <Dropdown {...props} emptyOption={true}/>) 

    // used to be ".coverages.pip.broadpipnum" now "car.coverages.pip.ks.broadpipnum" and is not mapped in model
    const BroadenedPIPComponent = MakeAtoAComponent({
        get: car => "", set: (car, value) => void 0,
        validate: false,
        label: "Number of Individuals for Broadened PIP",
        labelStyle: {paddingLeft: 16}
    })(props => <Editbox pattern={/[0-9]{1,5}/} style={{width: 80}} {...props}/>)

    // used to be ".coverages.pip.addedbroadpipnum" now "car.coverages.pip.ks.addedbroadpipnum" and is not mapped in model
    const NumNamedIndividuals = MakeAtoAComponent({
        get: car => "", set: (car, value) => void 0,
        validate: false,
        label: "Number of Named Individuals for Additional Broadened PIP",
        labelStyle: {paddingLeft: 16}
    })(props => <Editbox pattern={/[0-9]{1,5}/} style={{width: 80}} {...props}/>)        

    // used to be ".coverages.pip.addedbpipoptioncd" now "car.coverages.pip.ks.addedbpipoptioncd" and is not mapped in model
    const Addedbpipoptioncd = MakeAtoAComponent({
        get: car => ({ value: "", items: PipAddlItems }), set: (car, value) => void 0,
        validate: false,
        label: "Additional Broadened Personal Injury Protection",
        labelStyle: {paddingLeft: 16}
    })(props => <Dropdown {...props} emptyOption={true}/>) 

    // used to be ".coverages.pip.addedbroadpipnum" now "car.coverages.pip.ks.addedbroadpipnum" and is not mapped in model
    const NumNamedIndividualsSwitch = MakeSwitch(car => false).to(Addedbpipoptioncd)    
    
    // used to be ".coverages.pip.broadpipnum" now "car.coverages.pip.ks.broadpipnum" and is not mapped in model
    const BroadenedPIPSwitch = MakeSwitch(car => false).to(NumNamedIndividuals)

    const PipIncludedSwitch = MakeSwitch(car => car.coverages.pipCoverage.includeInd === "Y").to(AddlPipComponent, BroadenedPIPComponent, BroadenedPIPSwitch)
    const PhysDmgSwitch = MakeSwitch(car => car.physDmgInd !== "Y" && car.p.state === "KS").to(PipComponent, PipIncludedSwitch)
 
    export const Sheet = Pipe<ICoreCommCmauCarVs>() (props => 
        <React.Fragment>
            <div className="inline-section-header"><div>Coverages</div></div>
            <div className="dfe-inline-section">
                <table className="dfe-table col-3-centred tab-cols-4-3-3">
                    <tbody>
                        <PhysicalDmgOnlyComponent model={props.data}/>
                        <CompDedComponent model={props.data}/>
                        <CollDedComponent model={props.data}/>
                        <ValuationSwitch model={props.data}>
                            <ValuationComponent model={props.data}/>
                            <StatedAmoutSwitch model={props.data}>
                                <StatedAmoutComponent model={props.data}/>
                            </StatedAmoutSwitch>                            
                        </ValuationSwitch>
                        <PhysDmgSwitch model={props.data}>
                            <PipComponent model={props.data}/>
                            <PipIncludedSwitch model={props.data}>
                                <AddlPipComponent model={props.data}/>
                                <BroadenedPIPComponent model={props.data}/>
                                <BroadenedPIPSwitch model={props.data}>
                                    <NumNamedIndividuals model={props.data}/>
                                    <NumNamedIndividualsSwitch model={props.data}>
                                        <Addedbpipoptioncd model={props.data}/>
                                    </NumNamedIndividualsSwitch>
                                </BroadenedPIPSwitch>
                            </PipIncludedSwitch>
                        </PhysDmgSwitch>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ).to(PhysicalDmgOnlyComponent, CompDedComponent, CollDedComponent, ValuationSwitch, PhysDmgSwitch)
}
namespace Optional {
    const TowingAndLaborComponent = MakeAtoAComponent({
        get: car => ({ value: car.coverages.towlabor,  items: TowlaborItems }), set: (car, value: string) => car.coverages.towlabor = value,
        validate: true,
        label: "Towing and Labor"
    })(props => <Dropdown {...props} emptyOption={true}/>)

    const TowingAndLaborSwitch = MakeSwitch(car => car.vehicleType == VehicleType.PrivatePassenger && !!car.coverages.comprehensiveDeductible.match(/\d|Full/)).to(TowingAndLaborComponent)

    const LossPayeeComponent = MakeAtoAComponent({
        get: car => car.lossPayee.lossPayeeIncludeInd, set: (car, value) => car.lossPayee.lossPayeeIncludeInd = value,
        validate: false,
        label: "Loss Payee"
    })(props => <Checkbox {...props}/>)
    
    const KSSpecificOpt1 = MakeAtoAComponent({
        get: car => car.lossPayee.additionalInsuredLessorIncludeInd, set: (car, value) => car.lossPayee.additionalInsuredLessorIncludeInd = value,
        validate: false,
        label: "Additional Insured - Lessor"
    })(props => <Checkbox {...props}/>)

    const KSSpecificOpt2 = MakeAtoAComponent({
        get: car => car.lossPayee.haownInd, set: (car, value) => car.lossPayee.haownInd = value,
        validate: false,
        label: "Hired Auto - Specified As Covered Auto You Own"
    })(props => <Checkbox {...props}/>)

    const KSSpecificSwitch = MakeSwitch(car => car.p.state === "KS").to(KSSpecificOpt1, KSSpecificOpt2);

    const EmployeeAsLessorComponent = MakeAtoAComponent({
        get: car => car.emplessor, set: (car, value) => car.emplessor = value,
        validate: false,
        label: "Employee as Lessor"
    })(props => <Checkbox {...props}/>)

    const AddlNamedInsuredComponent = MakeAtoAComponent({
        get: car => car.lossPayee.namedInsuredInd, set: (car, value) => car.lossPayee.namedInsuredInd = value,
        validate: false,
        label: "Additional Named Insured"
    })(props => <Checkbox {...props}/>)

    const AddlNamedInsuredNameComponent = MakeAtoAComponent({
        get: car => car.lossPayee.namedInsured.name, set: (car, value) => car.lossPayee.namedInsured.name = value,
        validate: true,
        label: "*Name",
        labelStyle: {paddingLeft: 10}
    })(props => <Editbox {...props}/>)

    const AddlNamedInsuredSwitch = MakeSwitch(car => car.lossPayee.namedInsuredInd === "Y").to(AddlNamedInsuredNameComponent);
    const NonKSSpecificSwitch = MakeSwitch(car => car.p.state !== "KS").to(AddlNamedInsuredComponent, AddlNamedInsuredSwitch);

    export const Sheet = Pipe<ICoreCommCmauCarVs>() (props => 
        <React.Fragment>
            <div className="inline-section-header"><div>Optional Coverages</div></div>
            <div className="dfe-inline-section">
                <table className="dfe-table col-3-centred tab-cols-4-3-3">
                    <tbody>
                        <TowingAndLaborSwitch model={props.data}>
                            <TowingAndLaborComponent model={props.data}/>
                        </TowingAndLaborSwitch>
                        <LossPayeeComponent model={props.data}/>
                        <KSSpecificSwitch model={props.data}>
                            <KSSpecificOpt1 model={props.data}/>
                            <KSSpecificOpt2 model={props.data}/>
                        </KSSpecificSwitch>
                        <EmployeeAsLessorComponent model={props.data}/>
                        <NonKSSpecificSwitch model={props.data}>
                            <AddlNamedInsuredComponent model={props.data}/>
                            <AddlNamedInsuredSwitch model={props.data}>
                                <AddlNamedInsuredNameComponent model={props.data}/>
                            </AddlNamedInsuredSwitch>
                        </NonKSSpecificSwitch>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ).to(TowingAndLaborSwitch, LossPayeeComponent, KSSpecificSwitch, EmployeeAsLessorComponent, NonKSSpecificSwitch)
}

const QuoteCmauCarForm = LocationTabComponent.to(
    LocationHeaderComponent,
    LocationBodyComponent.to(
        CarTabComponent.to(
            CarHeaderComponent,
            CarBodyComponent.to(GenInfo.Sheet,Private.Switch,Truck.Switch,Cart.Switch,Mobile.Switch,Coverages.Sheet,Optional.Sheet)
        )
    )
).field

export { LocationTabComponent as FormComponent, QuoteCmauCarForm as form, CoreCommVsProxy as modelImpl }