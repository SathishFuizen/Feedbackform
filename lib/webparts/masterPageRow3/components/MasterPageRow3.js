import * as React from 'react';
import './MasterPageRow3.scss';
import Trainings from './Trainings';
import Tasks from './Tasks';
import OpinionPoll from './Opinion Poll';
var MasterPageRow3 = function (props) {
    return (React.createElement("div", { className: "Containers3" },
        React.createElement("div", null,
            React.createElement(Trainings, { description: props.description, isDarkTheme: props.isDarkTheme, environmentMessage: props.environmentMessage, hasTeamsContext: props.hasTeamsContext, userDisplayName: props.userDisplayName, context: props.context, ListName: props.ListName })),
        React.createElement("div", null,
            React.createElement(Tasks, null)),
        React.createElement("div", null,
            React.createElement(OpinionPoll, { description: props.description, isDarkTheme: props.isDarkTheme, environmentMessage: props.environmentMessage, hasTeamsContext: props.hasTeamsContext, userDisplayName: props.userDisplayName, context: props.context, ListName: props.ListName }))));
};
export default MasterPageRow3;
//# sourceMappingURL=MasterPageRow3.js.map