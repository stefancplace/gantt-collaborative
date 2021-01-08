/*!
 *
 * Bryntum Gantt 4.0.6 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("En",[],t):"object"==typeof exports?exports.En=t():(e.bryntum=e.bryntum||{},e.bryntum.locales=e.bryntum.locales||{},e.bryntum.locales.En=t())}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",(function(){return s}));var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"mergeLocales",value:function(){for(var e={},t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.forEach((function(t){Object.keys(t).forEach((function(n){"object"===i(t[n])?e[n]=r(r({},e[n]),t[n]):e[n]=t[n]}))})),e}},{key:"trimLocale",value:function(e,t){var n=function(t,n){if(!e[t])throw new Error('Key "'.concat(t,"\" doesn't exist in locale"));if(n){if(!e[t][n])throw new Error('SubKey "'.concat(t,".").concat(n,"\" doesn't exist in locale"));delete e[t][n]}else delete e[t]};Object.keys(t).forEach((function(e){Array.isArray(t[e])?t[e].forEach((function(t){return n(e,t)})):n(e)}))}},{key:"publishLocale",value:function(e,t){var n=window.bryntum=window.bryntum||{},o=n.locales=n.locales||{};o[e]=o[e]?this.mergeLocales(o[e],t):t}}],(n=null)&&l(t.prototype,n),o&&l(t,o),e}()},function(e,t,n){"use strict";n.r(t);var o={localeName:"En",localeDesc:"English",Object:{Yes:"Yes",No:"No",Cancel:"Cancel"},Combo:{noResults:"No results"},FilePicker:{file:"File"},Field:{badInput:"Invalid field value",patternMismatch:"Value should match a specific pattern",rangeOverflow:function(e){return"Value must be less than or equal to ".concat(e.max)},rangeUnderflow:function(e){return"Value must be greater than or equal to ".concat(e.min)},stepMismatch:"Value should fit the step",tooLong:"Value should be shorter",tooShort:"Value should be longer",typeMismatch:"Value is required to be in a special format",valueMissing:"This field is required",invalidValue:"Invalid field value",minimumValueViolation:"Minimum value violation",maximumValueViolation:"Maximum value violation",fieldRequired:"This field is required",validateFilter:"Value must be selected from the list"},DateField:{invalidDate:"Invalid date input"},NumberFormat:{locale:"en-US",currency:"USD"},DurationField:{invalidUnit:"Invalid unit"},TimeField:{invalidTime:"Invalid time input"},List:{loading:"Loading..."},PagingToolbar:{firstPage:"Go to first page",prevPage:"Go to previous page",page:"Page",nextPage:"Go to next page",lastPage:"Go to last page",reload:"Reload current page",noRecords:"No records to display",pageCountTemplate:function(e){return"of ".concat(e.lastPage)},summaryTemplate:function(e){return"Displaying records ".concat(e.start," - ").concat(e.end," of ").concat(e.allCount)}},DateHelper:{locale:"en-US",weekStartDay:0,unitNames:[{single:"millisecond",plural:"ms",abbrev:"ms"},{single:"second",plural:"seconds",abbrev:"s"},{single:"minute",plural:"minutes",abbrev:"min"},{single:"hour",plural:"hours",abbrev:"h"},{single:"day",plural:"days",abbrev:"d"},{single:"week",plural:"weeks",abbrev:"w"},{single:"month",plural:"months",abbrev:"mon"},{single:"quarter",plural:"quarters",abbrev:"q"},{single:"year",plural:"years",abbrev:"yr"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["h","hr"],["d"],["w","wk"],["mo","mon","mnt"],["q","quar","qrt"],["y","yr"]],parsers:{L:"MM/DD/YYYY",LT:"HH:mm A"},ordinalSuffix:function(e){var t="th";["11","12","13"].find((function(t){return e.endsWith(t)}))||(t={1:"st",2:"nd",3:"rd"}[e[e.length-1]]||"th");return e+t}}},r=n(0),a=r.a.mergeLocales(o,{ColumnPicker:{column:"Column",columnsMenu:"Columns",hideColumn:"Hide column",hideColumnShort:"Hide"},Filter:{applyFilter:"Apply filter",filter:"Filter",editFilter:"Edit filter",on:"On",before:"Before",after:"After",equals:"Equals",lessThan:"Less than",moreThan:"More than",removeFilter:"Remove filter"},FilterBar:{enableFilterBar:"Show filter bar",disableFilterBar:"Hide filter bar"},Group:{group:"Group",groupAscending:"Group ascending",groupDescending:"Group descending",groupAscendingShort:"Ascending",groupDescendingShort:"Descending",stopGrouping:"Stop grouping",stopGroupingShort:"Stop"},Search:{searchForValue:"Search for value"},Sort:{sort:"Sort",sortAscending:"Sort ascending",sortDescending:"Sort descending",multiSort:"Multi sort",removeSorter:"Remove sorter",addSortAscending:"Add ascending sorter",addSortDescending:"Add descending sorter",toggleSortAscending:"Change to ascending",toggleSortDescending:"Change to descending",sortAscendingShort:"Ascending",sortDescendingShort:"Descending",removeSorterShort:"Remove",addSortAscendingShort:"+ Ascending",addSortDescendingShort:"+ Descending"},GridBase:{loadFailedMessage:"Data loading failed!",syncFailedMessage:"Data synchronization failed!",unspecifiedFailure:"Unspecified failure",networkFailure:"Network error",parseFailure:"Failed to parse server response",loadMask:"Loading...",syncMask:"Saving changes, please wait...",noRows:"No records to display",moveColumnLeft:"Move to left section",moveColumnRight:"Move to right section",removeRow:"Delete record",removeRows:"Delete records",moveColumnTo:function(e){return"Move column to ".concat(e)}},CellMenu:{removeRow:"Delete record",removeRows:"Delete records"},PdfExport:{"Waiting for response from server":"Waiting for response from server...","Export failed":"Export failed","Server error":"Server error","Generating pages":"Generating pages..."},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Export settings",export:"Export",exporterType:"Control pagination",cancel:"Cancel",fileFormat:"File format",rows:"Rows",alignRows:"Align rows",columns:"Columns",paperFormat:"Paper format",orientation:"Orientation",repeatHeader:"Repeat header"},ExportRowsCombo:{all:"All rows",visible:"Visible rows"},ExportOrientationCombo:{portrait:"Portrait",landscape:"Landscape"},SinglePageExporter:{singlepage:"Single page"},MultiPageExporter:{multipage:"Multiple pages",exportingPage:function(e){var t=e.currentPage,n=e.totalPages;return"Exporting page ".concat(t,"/").concat(n)}},MultiPageVerticalExporter:{multipagevertical:"Multiple pages (vertical)",exportingPage:function(e){var t=e.currentPage,n=e.totalPages;return"Exporting page ".concat(t,"/").concat(n)}}}),i=r.a.mergeLocales(a,{ResourceInfoColumn:{eventCountText:function(e){return e+" event"+(1!==e?"s":"")}},Dependencies:{from:"From",to:"To",valid:"Valid",invalid:"Invalid"},DependencyType:{SS:"SS",SF:"SF",FS:"FS",FF:"FF",StartToStart:"Start-to-Start",StartToEnd:"Start-to-End",EndToStart:"End-to-Start",EndToEnd:"End-to-End",short:["SS","SF","FS","FF"],long:["Start-to-Start","Start-to-End","End-to-Start","End-to-End"]},DependencyEdit:{From:"From",To:"To",Type:"Type",Lag:"Lag","Edit dependency":"Edit dependency",Save:"Save",Delete:"Delete",Cancel:"Cancel",StartToStart:"Start to Start",StartToEnd:"Start to End",EndToStart:"End to Start",EndToEnd:"End to End"},EventEdit:{Name:"Name",Resource:"Resource",Start:"Start",End:"End",Save:"Save",Delete:"Delete",Cancel:"Cancel","Edit event":"Edit event",Repeat:"Repeat"},EventDrag:{eventOverlapsExisting:"Event overlaps existing event for this resource",noDropOutsideTimeline:"Event may not be dropped completely outside the timeline"},SchedulerBase:{"Add event":"Add event","Delete event":"Delete event","Unassign event":"Unassign event"},HeaderContextMenu:{pickZoomLevel:"Zoom",activeDateRange:"Date range",startText:"Start date",endText:"End date",todayText:"Today"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Date range",startText:"Start date",endText:"End date",todayText:"Today"},UndoRedo:{UndoLastAction:"Undo last action",RedoLastAction:"Redo last undone action"},EventFilter:{filterEvents:"Filter tasks",byName:"By name"},TimeRanges:{showCurrentTimeLine:"Show current timeline"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS"},minuteAndHour:{topDateFormat:"ddd MM/DD, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM/DD",middleDateFormat:"LST",displayDateFormat:"ll LST"},weekAndDay:{displayDateFormat:"ll LST"},dayAndWeek:{displayDateFormat:"ll LST"}},RecurrenceConfirmationPopup:{"delete-title":"You are deleting an event","delete-all-message":"Do you want to delete all occurrences of this event?","delete-further-message":"Do you want to delete this and all future occurrences of this event, or only the selected occurrence?","delete-further-btn-text":"Delete All Future Events","delete-only-this-btn-text":"Delete Only This Event","update-title":"You are changing a repeating event","update-all-message":"Do you want to change all occurrences of this event?","update-further-message":"Do you want to change only this occurrence of the event, or this and all future occurrences?","update-further-btn-text":"All Future Events","update-only-this-btn-text":"Only This Event",Yes:"Yes",Cancel:"Cancel",width:600},RecurrenceLegend:{" and ":" and ",Daily:"Daily","Weekly on {1}":function(e){var t=e.days;return"Weekly on ".concat(t)},"Monthly on {1}":function(e){var t=e.days;return"Monthly on ".concat(t)},"Yearly on {1} of {2}":function(e){var t=e.days,n=e.months;return"Yearly on ".concat(t," of ").concat(n)},"Every {0} days":function(e){var t=e.interval;return"Every ".concat(t," days")},"Every {0} weeks on {1}":function(e){var t=e.interval,n=e.days;return"Every ".concat(t," weeks on ").concat(n)},"Every {0} months on {1}":function(e){var t=e.interval,n=e.days;return"Every ".concat(t," months on ").concat(n)},"Every {0} years on {1} of {2}":function(e){var t=e.interval,n=e.days,o=e.months;return"Every ".concat(t," years on ").concat(n," of ").concat(o)},position1:"the first",position2:"the second",position3:"the third",position4:"the fourth",position5:"the fifth","position-1":"the last",day:"day",weekday:"weekday","weekend day":"weekend day",daysFormat:function(e){var t=e.position,n=e.days;return"".concat(t," ").concat(n)}},RecurrenceEditor:{"Repeat event":"Repeat event",Cancel:"Cancel",Save:"Save",Frequency:"Frequency",Every:"Every",DAILYintervalUnit:"day(s)",WEEKLYintervalUnit:"week(s)",MONTHLYintervalUnit:"month(s)",YEARLYintervalUnit:"year(s)",Each:"Each","On the":"On the","End repeat":"End repeat","time(s)":"time(s)"},RecurrenceDaysCombo:{day:"day",weekday:"weekday","weekend day":"weekend day"},RecurrencePositionsCombo:{position1:"first",position2:"second",position3:"third",position4:"fourth",position5:"fifth","position-1":"last"},RecurrenceStopConditionCombo:{Never:"Never",After:"After","On date":"On date"},RecurrenceFrequencyCombo:{Daily:"Daily",Weekly:"Weekly",Monthly:"Monthly",Yearly:"Yearly"},RecurrenceCombo:{None:"None",Custom:"Custom..."},Summary:{"Summary for":function(e){return"Summary for ".concat(e)}},ScheduleRangeCombo:{completeview:"Complete schedule",currentview:"Visible schedule",daterange:"Date range",completedata:"Complete schedule (for all events)"},SchedulerExportDialog:{"Schedule range":"Schedule range","Export from":"From","Export to":"To"},ExcelExporter:{"No resource assigned":"No resource assigned"},CrudManagerView:{serverResponseLabel:"Server response:"}}),l=r.a.mergeLocales(i,{ConstraintTypePicker:{none:"None",muststarton:"Must start on",mustfinishon:"Must finish on",startnoearlierthan:"Start no earlier than",startnolaterthan:"Start no later than",finishnoearlierthan:"Finish no earlier than",finishnolaterthan:"Finish no later than"},CalendarField:{"Default calendar":"Default calendar"},TaskEditorBase:{Information:"Information",Save:"Save",Cancel:"Cancel",Delete:"Delete",calculateMask:"Calculating...",saveError:"Can't save, please correct errors first"},TaskEdit:{"Edit task":"Edit task",ConfirmDeletionTitle:"Confirm deletion",ConfirmDeletionMessage:"Are you sure you want to delete the event?"},TaskEditor:{editorWidth:"34em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"General",Name:"Name",Resources:"Resources","% complete":"% complete",Duration:"Duration",Start:"Start",Finish:"Finish"},GeneralTab:{labelWidth:"6.5em",General:"General",Name:"Name","% complete":"% complete",Duration:"Duration",Start:"Start",Finish:"Finish",Effort:"Effort",Dates:"Dates"},SchedulerAdvancedTab:{labelWidth:"13em",Calendar:"Calendar",Advanced:"Advanced","Manually scheduled":"Manually scheduled","Constraint type":"Constraint type","Constraint date":"Constraint date"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Advanced",Calendar:"Calendar","Scheduling mode":"Scheduling mode","Effort driven":"Effort driven","Manually scheduled":"Manually scheduled","Constraint type":"Constraint type","Constraint date":"Constraint date",Constraint:"Constraint",Rollup:"Rollup"},DependencyTab:{Predecessors:"Predecessors",Successors:"Successors",ID:"ID",Name:"Name",Type:"Type",Lag:"Lag",cyclicDependency:"Cyclic dependency has been detected",invalidDependency:"Invalid dependency"},NotesTab:{Notes:"Notes"},ResourcesTab:{unitsTpl:function(e){var t=e.value;return"".concat(t,"%")},Resources:"Resources",Resource:"Resource",Units:"Units"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Fixed Duration","Fixed Units":"Fixed Units","Fixed Effort":"Fixed Effort"},ResourceHistogram:{barTipInRange:"<b>{resource}</b> {startDate} - {endDate}<br>{allocated} of {available} allocated",barTipOnDate:"<b>{resource}</b> on {startDate}<br>{allocated} of {available} allocated"},DurationColumn:{Duration:"Duration"}}),s=r.a.mergeLocales(l,{Object:{Save:"Save"},AddNewColumn:{"New Column":"New Column"},CalendarColumn:{Calendar:"Calendar"},EarlyStartDateColumn:{"Early Start":"Early Start"},EarlyEndDateColumn:{"Early End":"Early End"},LateStartDateColumn:{"Late Start":"Late Start"},LateEndDateColumn:{"Late End":"Late End"},TotalSlackColumn:{"Total Slack":"Total Slack"},ConstraintDateColumn:{"Constraint Date":"Constraint Date"},ConstraintTypeColumn:{"Constraint Type":"Constraint Type"},DeadlineDateColumn:{Deadline:"Deadline"},DependencyColumn:{"Invalid dependency":"Invalid dependency found, change reverted"},DurationColumn:{Duration:"Duration"},EffortColumn:{Effort:"Effort"},EndDateColumn:{Finish:"Finish"},EventModeColumn:{"Event mode":"Event mode",Manual:"Manual",Auto:"Auto"},ManuallyScheduledColumn:{"Manually scheduled":"Manually scheduled"},MilestoneColumn:{Milestone:"Milestone"},NameColumn:{Name:"Name"},NoteColumn:{Note:"Note"},PercentDoneColumn:{"% Done":"% Done"},PredecessorColumn:{Predecessors:"Predecessors"},ResourceAssignmentColumn:{"Assigned Resources":"Assigned Resources","more resources":"more resources"},RollupColumn:{Rollup:"Rollup"},SchedulingModeColumn:{"Scheduling Mode":"Scheduling Mode"},SequenceColumn:{Sequence:"Sequence"},ShowInTimelineColumn:{"Show in timeline":"Show in timeline"},StartDateColumn:{Start:"Start"},SuccessorColumn:{Successors:"Successors"},WBSColumn:{WBS:"WBS",renumber:"Renumber"},DependencyField:{invalidDependencyFormat:"Invalid dependency format"},ProjectLines:{"Project Start":"Project start","Project End":"Project end"},TaskTooltip:{Start:"Start",End:"End",Duration:"Duration",Complete:"Complete"},AssignmentGrid:{Name:"Resource name",Units:"Units",unitsTpl:function(e){var t=e.value;return t?t+"%":""}},GanttBase:{propagating:"Calculating project",storePopulation:"Loading data"},Gantt:{Edit:"Edit task",Indent:"Indent",Outdent:"Outdent","Convert to milestone":"Convert to milestone",Add:"Add...","New task":"New task","New milestone":"New milestone","Task above":"Task above","Task below":"Task below","Delete task":"Delete task",Milestone:"Milestone","Sub-task":"Subtask",Successor:"Successor",Predecessor:"Predecessor",changeRejected:"Scheduling engine rejected the changes"},Indicators:{earlyDates:"Early start/end",lateDates:"Late start/end",Start:"Start",End:"End",deadlineDate:"Deadline"},TaskEditor:{editorWidth:"44em"}});r.a.trimLocale(s,{EventEdit:["Repeat"],RecurrenceCombo:{},RecurrenceConfirmationPopup:{},RecurrenceDaysCombo:{},RecurrenceEditor:{},RecurrenceFrequencyCombo:{},RecurrenceLegend:{},RecurrencePositionsCombo:{},RecurrenceStopConditionCombo:{}});t.default=s}]).default}));