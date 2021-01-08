/*!
 *
 * Bryntum Gantt 4.0.6 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Nl",[],n):"object"==typeof exports?exports.Nl=n():(e.bryntum=e.bryntum||{},e.bryntum.locales=e.bryntum.locales||{},e.bryntum.locales.Nl=n())}(window,(function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){"use strict";function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}t.d(n,"a",(function(){return d}));var d=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,a=[{key:"mergeLocales",value:function(){for(var e={},n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return t.forEach((function(n){Object.keys(n).forEach((function(t){"object"===i(n[t])?e[t]=r(r({},e[t]),n[t]):e[t]=n[t]}))})),e}},{key:"trimLocale",value:function(e,n){var t=function(n,t){if(!e[n])throw new Error('Key "'.concat(n,"\" doesn't exist in locale"));if(t){if(!e[n][t])throw new Error('SubKey "'.concat(n,".").concat(t,"\" doesn't exist in locale"));delete e[n][t]}else delete e[n]};Object.keys(n).forEach((function(e){Array.isArray(n[e])?n[e].forEach((function(n){return t(e,n)})):t(e)}))}},{key:"publishLocale",value:function(e,n){var t=window.bryntum=window.bryntum||{},a=t.locales=t.locales||{};a[e]=a[e]?this.mergeLocales(a[e],n):n}}],(t=null)&&l(n.prototype,t),a&&l(n,a),e}()},,function(e,n,t){"use strict";t.r(n);var a={localeName:"Nl",localeDesc:"Nederlands",Object:{Yes:"Ja",No:"Nee",Cancel:"Annuleren"},Combo:{noResults:"Geen resultaten"},FilePicker:{file:"Vijl"},Field:{badInput:"Ongeldige veldwaarde",patternMismatch:"Waarde moet overeenkomen met een specifiek patroon",rangeOverflow:function(e){return"Waarde moet kleiner zijn dan of gelijk aan ".concat(e.max)},rangeUnderflow:function(e){return"Waarde moet groter zijn dan of gelijk aan ".concat(e.min)},stepMismatch:"Waarde moet bij de stap passen",tooLong:"Waarde moet korter zijn",tooShort:"Waarde moet langer zijn",typeMismatch:"Waarde moet een speciaal formaat hebben",valueMissing:"Dit veld is verplicht",invalidValue:"Ongeldige veldwaarde",minimumValueViolation:"Minimale waarde schending",maximumValueViolation:"Maximale waarde schending",fieldRequired:"Dit veld is verplicht",validateFilter:"Waarde moet worden geselecteerd in de lijst"},DateField:{invalidDate:"Ongeldige datuminvoer"},NumberFormat:{locale:"nl",currency:"EUR"},DurationField:{invalidUnit:"Ongeldige eenheid"},TimeField:{invalidTime:"Ongeldige tijdsinvoer"},List:{loading:"Laden..."},PagingToolbar:{firstPage:"Ga naar de eerste pagina",prevPage:"Ga naar de vorige pagina",page:"Pagina",nextPage:"Ga naar de volgende pagina",lastPage:"Ga naar de laatste pagina",reload:"Laad huidige pagina opnieuw",noRecords:"Geen rijen om weer te geven",pageCountTemplate:function(e){return"van ".concat(e.lastPage)},summaryTemplate:function(e){return"Records ".concat(e.start," - ").concat(e.end," van ").concat(e.allCount," worden weergegeven")}},DateHelper:{locale:"nl",weekStartDay:1,unitNames:[{single:"ms",plural:"ms",abbrev:"ms"},{single:"seconde",plural:"seconden",abbrev:"s"},{single:"minuut",plural:"minuten",abbrev:"m"},{single:"uur",plural:"uren",abbrev:"u"},{single:"dag",plural:"dagen",abbrev:"d"},{single:"week",plural:"weken",abbrev:"w"},{single:"maand",plural:"maanden",abbrev:"ma"},{single:"kwartaal",plural:"kwartalen",abbrev:"kw"},{single:"jaar",plural:"jaren",abbrev:"j"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["u"],["d"],["w","wk"],["ma","mnd","m"],["k","kwar","kwt","kw"],["j","jr"]],parsers:{L:"DD-MM-YYYY",LT:"HH:mm"},ordinalSuffix:function(e){return e}}},r=t(0),o=r.a.mergeLocales(a,{ColumnPicker:{column:"Kolom",columnsMenu:"Kolommen",hideColumn:"Verberg Kolom",hideColumnShort:"Verberg"},Filter:{applyFilter:"Pas filter toe",filter:"Filter",editFilter:"Wijzig filter",on:"Aan",before:"Voor",after:"Na",equals:"Is gelijk",lessThan:"Minder dan",moreThan:"Meer dan",removeFilter:"Verwijder filter"},FilterBar:{enableFilterBar:"Maak filterbalk zichtbaar",disableFilterBar:"Verberg filterbalk"},Group:{group:"Groepeer",groupAscending:"Groepeer oplopend",groupDescending:"Groepeer aflopend",groupAscendingShort:"Oplopend",groupDescendingShort:"Aflopend",stopGrouping:"Maak groepering ongedaan",stopGroupingShort:"Maak ongedaan"},Search:{searchForValue:"Zoek op term"},Sort:{sort:"Sorteer",sortAscending:"Sorteer oplopend",sortDescending:"Sorteer aflopend",multiSort:"Meerdere sorteringen",removeSorter:"Verwijder sortering",addSortAscending:"Voeg oplopende sortering toe",addSortDescending:"Voeg aflopende sortering toe",toggleSortAscending:"Sorteer oplopend",toggleSortDescending:"Sorteer aflopend",sortAscendingShort:"Oplopend",sortDescendingShort:"Aflopend",removeSorterShort:"Verwijder",addSortAscendingShort:"+ Oplopend",addSortDescendingShort:"+ Aflopend"},GridBase:{loadFailedMessage:"Laden mislukt!",syncFailedMessage:"Gegevenssynchronisatie is mislukt!",unspecifiedFailure:"Niet-gespecificeerde fout",networkFailure:"Netwerk fout",parseFailure:"Kan server response niet parsen",loadMask:"Laden...",syncMask:"Bezig met opslaan...",noRows:"Geen rijen om weer te geven",removeRow:"Verwijder rij",removeRows:"Verwijder rijen",moveColumnLeft:"Plaats naar het linker kader",moveColumnRight:"Plaats naar het rechter kader",moveColumnTo:function(e){return"Kolom verplaatsen naar ".concat(e)}},CellMenu:{removeRow:"Verwijder rij",removeRows:"Verwijder rijen"},PdfExport:{"Waiting for response from server":"Wachten op antwoord van server...","Export failed":"Export mislukt","Server error":"Serverfout","Generating pages":"Pagina's genereren..."},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Instellingen exporteren",export:"Exporteren",exporterType:"Paginering beheren",cancel:"Annuleren",fileFormat:"Bestandsformaat",rows:"Rijen",alignRows:"Rijen uitlijnen",columns:"Columns",paperFormat:"Papier formaat",orientation:"Oriëntatatie",repeatHeader:"Herhaal koptekst"},ExportRowsCombo:{all:"Alle rijen",visible:"Zichtbare rijen"},ExportOrientationCombo:{portrait:"Staand",landscape:"Liggend"},SinglePageExporter:{singlepage:"Enkele pagina"},MultiPageExporter:{multipage:"Meerdere pagina's",exportingPage:function(e){var n=e.currentPage,t=e.totalPages;return"Exporteren van de pagina ".concat(n,"/").concat(t)}},MultiPageVerticalExporter:{multipagevertical:"Meerdere pagina's (verticaal)",exportingPage:function(e){var n=e.currentPage,t=e.totalPages;return"Exporteren van de pagina ".concat(n,"/").concat(t)}}}),i=r.a.mergeLocales(o,{ResourceInfoColumn:{eventCountText:function(e){return e+" evenement"+(1!==e?"en":"")}},Dependencies:{from:"Van",to:"Naar",valid:"Geldig",invalid:"Ongeldig"},DependencyType:{SS:"GB",SF:"BE",FS:"EB",FF:"GE",StartToStart:"Gelijk-Begin",StartToEnd:"Begin-na-Einde",EndToStart:"Einde-na-Begin",EndToEnd:"Gelijk-Einde",short:["GB","BE","EB","GE"],long:["Gelijk-Begin","Begin-na-Einde","Einde-na-Begin","Gelijk-Einde"]},EventEdit:{Name:"Naam",Resource:"Resource",Start:"Start",End:"Eind",Save:"Bewaar",Delete:"Verwijder",Cancel:"Annuleer","Edit event":"Wijzig item",Repeat:"Herhaal"},DependencyEdit:{From:"Van",To:"Tot",Type:"Type",Lag:"Achterstand","Edit dependency":"Afhankelijkheid bewerken",Save:"Bewaar",Delete:"Verwijder",Cancel:"Annuleer",StartToStart:"Begin-Tot-Begin",StartToEnd:"Begin-Tot-Einde",EndToStart:"Einde-Tot-Start",EndToEnd:"Einde-Tot-Einde"},EventDrag:{eventOverlapsExisting:"Gebeurtenis overlapt bestaande gebeurtenis voor deze bron",noDropOutsideTimeline:"Evenement kan niet volledig buiten de tijdlijn worden verwijderd"},SchedulerBase:{"Add event":"Voeg evenement toe","Delete event":"Verwijder item","Unassign event":"Gebeurtenis ongedaan maken"},HeaderContextMenu:{pickZoomLevel:"Zoom in",activeDateRange:"Datum bereik",startText:"Start datum",endText:"Eind datum",todayText:"Vandaag"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom in",activeDateRange:"Datum bereik",startText:"Start datum",endText:"Eind datum",todayText:"Vandaag"},UndoRedo:{UndoLastAction:"Maak de laatste actie ongedaan",RedoLastAction:"Herhaal de laatste ongedaan gemaakte actie"},EventFilter:{filterEvents:"Filter items",byName:"Op naam"},TimeRanges:{showCurrentTimeLine:"Maak huidige tijdlijn zichtbaar"},PresetManager:{minuteAndHour:{topDateFormat:"ddd DD-MM, hh"},hourAndDay:{topDateFormat:"ddd DD-MM"},weekAndDay:{displayDateFormat:"hh:mm"}},RecurrenceConfirmationPopup:{"delete-title":"U verwijdert een plan item","delete-all-message":"Wilt u alle herhaalde afspraken van dit item verwijderen?","delete-further-message":"Wilt u het geselecteerde en alle toekomstige gebeurtenissen van dit item verwijderen, of aleen het geselecteerde item?","delete-further-btn-text":"Verwijder alleen de toekomstige gebeurtenissen","delete-only-this-btn-text":"Verwijder alleen deze gebeurtenis","update-title":"U verandert een herhaald item","update-all-message":"Wilt u alle herhaalde afspraken van dit item verwijderen?","update-further-message":"Wilt u het geselecteerde en alle toekomstige gebeurtenissen van dit item wijzigen, of aleen het geselecteerde item?","update-further-btn-text":"Wijzig alle toekomstige items","update-only-this-btn-text":"Wijzig alleen dit item",Yes:"Ja",Cancel:"Annuleer",width:600},RecurrenceLegend:{" and ":" en ",Daily:"Dagelijks","Weekly on {1}":function(e){var n=e.days;return"Wekelijks op ".concat(n)},"Monthly on {1}":function(e){var n=e.days;return"Maandelijks op ".concat(n)},"Yearly on {1} of {2}":function(e){var n=e.days,t=e.months;return"Jaarlijks op ".concat(n," ").concat(t)},"Every {0} days":function(e){var n=e.interval;return"Elke ".concat(n," dagen")},"Every {0} weeks on {1}":function(e){var n=e.interval,t=e.days;return"Elke ".concat(n," weken op ").concat(t)},"Every {0} months on {1}":function(e){var n=e.interval,t=e.days;return"Elke ".concat(n," maanden in ").concat(t)},"Every {0} years on {1} of {2}":function(e){var n=e.interval,t=e.days,a=e.months;return"Elke ".concat(n," jaar op ").concat(t," ").concat(a)},position1:"de eerste",position2:"de tweede",position3:"de derde",position4:"de vierde",position5:"de vijfde","position-1":"laatste",day:"dag",weekday:"weekdag","weekend day":"weekend dag",daysFormat:function(e){var n=e.position,t=e.days;return"".concat(n," ").concat(t)}},RecurrenceEditor:{"Repeat event":"Herhaal gebeurtenis",Cancel:"Annuleer",Save:"Bewaar",Frequency:"Frequentie",Every:"Elke",DAILYintervalUnit:"dag(en)",WEEKLYintervalUnit:"week(en)",MONTHLYintervalUnit:"maand(en)",YEARLYintervalUnit:"jaren(en)",Each:"Elke","On the":"Op de","End repeat":"Einde herhaling","time(s)":"tijd(en)"},RecurrenceDaysCombo:{day:"dag",weekday:"weekdag","weekend day":"weekend dag"},RecurrencePositionsCombo:{position1:"eerste",position2:"tweede",position3:"derde",position4:"vierde",position5:"vijfde","position-1":"laatste"},RecurrenceStopConditionCombo:{Never:"Nooit",After:"Na","On date":"Op datum"},RecurrenceFrequencyCombo:{Daily:"Dagelijks",Weekly:"Wekelijks",Monthly:"Maandelijks",Yearly:"Jaarlijks"},RecurrenceCombo:{None:"Geen",Custom:"Aangepast..."},Summary:{"Summary for":function(e){return"Samenvatting voor ".concat(e)}},ScheduleRangeCombo:{completeview:"Compleet schema",currentview:"Huidige weergave",daterange:"Periode",completedata:"Alle data (events)"},SchedulerExportDialog:{"Schedule range":"Scheduler bereik","Export from":"Vanaf","Export to":"Naar"},ExcelExporter:{"No resource assigned":"Geen resource toegewezen"},CrudManagerView:{serverResponseLabel:"Server reactie:"}}),l=r.a.mergeLocales(i,{ConstraintTypePicker:{none:"Geen",muststarton:"Niet eerder eindigen dan",mustfinishon:"Niet later eindigen dan",startnoearlierthan:"Moet beginnen op",startnolaterthan:"Moet eindigen op",finishnoearlierthan:"Niet eerder beginnen dan",finishnolaterthan:"Niet later beginnen dan"},CalendarField:{"Default calendar":"Standaardkalender"},TaskEditorBase:{Information:"Informatie",Save:"Opslaan",Cancel:"Annuleer",Delete:"Verwijder",calculateMask:"Taken berekenen...",saveError:"Kan niet opslaan. Corrigeer eerst de fouten"},TaskEdit:{"Edit task":"Bewerk taak",ConfirmDeletionTitle:"Bevestig verwijderen",ConfirmDeletionMessage:"Weet u zeker dat u dit item wilt verwijderen?"},TaskEditor:{editorWidth:"55em"},SchedulerTaskEditor:{editorWidth:"30em"},SchedulerGeneralTab:{labelWidth:"12em",General:"Algemeen",Name:"Naam",Resources:"Resources","% complete":"% compleet",Duration:"Duur",Start:"Begin",Finish:"Einde"},GeneralTab:{labelWidth:"6em",General:"Algemeen",Name:"Naam","% complete":"% compleet",Duration:"Duur",Start:"Begin",Finish:"Einde",Effort:"Inspanning",Dates:"Datums"},SchedulerAdvancedTab:{labelWidth:"10em",Advanced:"Geavanceerd",Calendar:"Kalender","Manually scheduled":"Handmatig","Constraint type":"Beperkingstype","Constraint date":"Beperkingsdatum"},AdvancedTab:{labelWidth:"12em",Advanced:"Geavanceerd",Calendar:"Kalender","Scheduling mode":"Taaktype","Effort driven":"Op inspanning","Manually scheduled":"Handmatig","Constraint type":"Beperkingstype","Constraint date":"Beperkingsdatum",Constraint:"Beperking",Rollup:"Samenvouwen"},DependencyTab:{Predecessors:"Voorafgaande taken",Successors:"Opvolgende taken",ID:"ID",Name:"Naam",Type:"Type",Lag:"Vertraging",cyclicDependency:"Cyclische afhankelijkheid",invalidDependency:"Ongeldige afhankelijkheid"},ResourcesTab:{unitsTpl:function(e){var n=e.value;return"".concat(n,"%")},Resources:"Middelen",Resource:"Hulpbron",Units:"Eenheden"},NotesTab:{Notes:"Notities"},SchedulingModePicker:{Normal:"Normaal","Fixed Duration":"Vaste duur","Fixed Units":"Vaste eenheden","Fixed Effort":"Vast werk"},DurationColumn:{Duration:"Duur"},ResourceHistogram:{barTipInRange:"<b>{resource}</b> {startDate} - {endDate}<br>{allocated} van de {available} toegewezen",barTipOnDate:"<b>{resource}</b> op {startDate}<br>{allocated} van de {available} toegewezen"}}),d=r.a.mergeLocales(l,{Object:{Save:"Bewaar"},AddNewColumn:{"New Column":"Nieuwe kolom"},CalendarColumn:{Calendar:"Kalender"},EarlyStartDateColumn:{"Early Start":"Vroegste startdatum"},EarlyEndDateColumn:{"Early End":"Vroegste einddatum"},LateStartDateColumn:{"Late Start":"Late startdatum"},LateEndDateColumn:{"Late End":"Late einddatum"},TotalSlackColumn:{"Total Slack":"Totale marge"},ConstraintDateColumn:{"Constraint Date":"Beperkingsdatum"},ConstraintTypeColumn:{"Constraint Type":"Beperkingstype"},DeadlineDateColumn:{Deadline:"Uiterste datum"},DependencyColumn:{"Invalid dependency":"Ongeldige afhankelijkheid gevonden, wijziging ongedaan gemaakt"},DurationColumn:{Duration:"Duur"},EffortColumn:{Effort:"Inspanning"},EndDateColumn:{Finish:"Einde"},EventModeColumn:{"Event mode":"Mode",Manual:"Met de hand",Auto:"Auto"},ManuallyScheduledColumn:{"Manually scheduled":"Handmatig ingepland"},MilestoneColumn:{Milestone:"Mijlpaalmarkering"},NameColumn:{Name:"Taak Naam"},NoteColumn:{Note:"Notitie"},PercentDoneColumn:{"% Done":"% Gedaan"},PredecessorColumn:{Predecessors:"Voorafgaande taken"},ResourceAssignmentColumn:{"Assigned Resources":"Toegewezen Resources","more resources":"extra resources"},RollupColumn:{Rollup:"Samenvouwen"},SchedulingModeColumn:{"Scheduling Mode":"Taaktype"},SequenceColumn:{Sequence:"#"},StartDateColumn:{Start:"Begin"},ShowInTimelineColumn:{"Show in timeline":"Toevoegen aan tijdlijn"},SuccessorColumn:{Successors:"Opvolgende taken"},WBSColumn:{WBS:"WBS",renumber:"Hernummer"},DependencyField:{invalidDependencyFormat:"Ongeldige afhankelijkheid formaat"},ProjectLines:{"Project Start":"Project begin","Project End":"Project einde"},TaskTooltip:{Start:"Begin",End:"Einde",Duration:"Duur",Complete:"Gedaan"},AssignmentGrid:{Name:"Resource Naam",Units:"Eenheden",unitsTpl:function(e){var n=e.value;return n?n+"%":""}},GanttBase:{propagating:"Beregning",storePopulation:"Indlæser data"},Gantt:{Edit:"Taak bewerken",Indent:"Inspringen",Outdent:"Uitspringen","Convert to milestone":"Converteren naar mijlpaal",Add:"Voeg toe...","New task":"Nieuwe taak","New milestone":"Nieuwe mijlpaal","Task above":"Bovenliggende taak","Task below":"Onderliggende Taak","Delete task":"Verwijder taak/taken",Milestone:"Mijlpaal","Sub-task":"Subtaak",Successor:"Voorgaande",Predecessor:"Voorganger",changeRejected:"Scheduling engine heeft de wijzigingen afgewezen"},Indicators:{earlyDates:"Vroegste start/eind",lateDates:"Laatste start/eind",deadlineDate:"Uiterste datum",Start:"Start",End:"Eind"},TaskEditor:{editorWidth:"54em"}});r.a.trimLocale(d,{EventEdit:["Repeat"],RecurrenceCombo:{},RecurrenceConfirmationPopup:{},RecurrenceDaysCombo:{},RecurrenceEditor:{},RecurrenceFrequencyCombo:{},RecurrenceLegend:{},RecurrencePositionsCombo:{},RecurrenceStopConditionCombo:{}});n.default=d}]).default}));