var createNewButtonList = document.getElementsByClassName("component-save-link");
createNewButton = createNewButtonList[0];
createNewButton.click();

var saveButton = document.getElementsByClassName("btn-blue btn-primary wide");
saveButton = saveButton[0];

var saveCurrentAudit = document.getElementsByClassName("btn-blue btn-primary");
saveCurrentAudit = saveCurrentAudit[3];

inputs = document.getElementsByTagName("input");
nameIdBox = inputs[0];
conditionCommentBox = inputs[1];
//Lamp Data
lampmanufacturerBox = inputs[2];
lampmodelBox = inputs[3];
lampLengthBox = inputs[4];
lampCCTBox = inputs[5];
lampCRIBox = inputs[6];
lampLuminousFluxBox = inputs[7];
lampIlluminanceBox = inputs[8];

//Ballast Data
ballastmanufacturerBox = inputs[9];
ballastmodelBox = inputs[10];
ballastPower = inputs[11];
ballastFactor = inputs[12];
//Fixture Info
fixtureHeight = inputs[13];
lampsPerFixture = inputs[14];
ballastsPerFixture = inputs[15];

//Number of fixtures on each floor
inBasement = inputs[17];
onFirst = inputs[18];
onSecond = inputs[19];
onThird = inputs[20];
onFourth = inputs[21];
onFifth = inputs[22];
onSixth = inputs[23];
onSeventh = inputs[24];
onEigth = inputs[25];
onNinth = inputs[26];
inPenthouse = inputs[27];

var selects = document.getElementsByTagName("select");
conditionRatingBox = selects[0];
lightSourceBox = selects[1];
ANSIDesignationBox = selects[2];
inputPowerBox = selects[3];
ballastTypeBox = selects[4];
startingMethodBox = selects[5];
inputVoltageBox = selects[6];
purposeBox = selects[7];
controlBox = selects[8];
mountingBox = selects[9];

class T5{
    constructor(LMake, LModel, LlightSource, LPowerIn, Llength, LCCT, LCRI, LLumFlux,LIllum, BMake, BModel, BType, BStartMethod,BLength,BCCT,BCRI,BLumFlux){
        LMake = Philips;
        LModel = 'F28T5/841';
        LlightSource = 'Mercury Vapor'
        LPowerIn = 27.9;
        Llength = 45.24;
        LCCT = 4100;
        LCRI = 82;
        LLumFlux = 2625;
        LIllum = '';
        BMake = 'Philips Advance Centium';
        BModel = 'ICN-2S39-T';
        BType = 'Electronic';
        BStartMethod = 'Program Start';
        BLength = 45.24;
        BCCT = 4100;
        BCRI = 82;
        BLumFlux = 2625;
    }
}

class T8{
    constructor(LMake, LModel, LlightSource, LPowerIn, Llength, LCCT, LCRI, LLumFlux,LIllum, BMake, BModel, BType, BStartMethod,BLength,BCCT,BCRI,BLumFlux){
        LMake = Philips;
        LModel = 'F28T5/841';
        LlightSource = 'Mercury Vapor'
        LPowerIn = 27.9;
        Llength = 45.24;
        LCCT = 4100;
        LCRI = 82;
        LLumFlux = 2625;
        LIllum = '';
        BMake = 'Philips Advance Centium';
        BModel = 'ICN-2S39-T';
        BType = 'Electronic';
        BStartMethod = 'Program Start';
        BLength = 45.24;
        BCCT = 4100;
        BCRI = 82;
        BLumFlux = 2625;
    }
}

function createFixture(nameId, conditionRating,){
    nameIdBox = nameId;
    conditionRatingBox = conditionRating;
    conditionComments = conditionComment;



}


{"floor": "Cellar", "FixtureType": "3F32T8", "TotalWatts": "178", "LampType": "F32T8", "NumberOfFixtures": "2", "FixtureWatts": "89", "Location": "SC-Office"}