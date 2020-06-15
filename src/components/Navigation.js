import React, { Component } from 'react';

import { Navigation } from '@instructure/ui-navigation';
import { Avatar } from '@instructure/ui-avatar';
import { IconCoursesLine, IconDashboardLine, IconCalendarMonthLine, IconInboxLine, IconQuestionLine } from '@instructure/ui-icons';
import MyTray from "./Tray";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrayOpen: false,
            activeItem: "dashboard",
            theCurrent: null,

        }
        this.closeTray = this.closeTray.bind(this);
        
    }

    handleClick(type){
        if(type === "dashboard" || type === "calendar" || type === "inbox"){
            this.setState({
                activeItem: type,
                isTrayOpen: false,
                theCurrent: null,
            });
        } else {
            if(this.state.theCurrent === null){
                this.setState({
                    isTrayOpen: true,
                    activeItem: type,
                    theCurrent: type,
                });
            }else{
                this.setState({
                    isTrayOpen: false,
                    activeItem: null,
                    theCurrent: null,
                });
            }
        }
    }
    
    closeTray(){
        this.setState({isTrayOpen: false ,activeItem: "dashboard", theCurrent: null});
    }

    render() {
        // console.log("render Nav");
        return (
            <div id="navi" style={{ position: "fixed", bottom: 0, top: 0, zIndex: 999 }}>
                <Navigation
                    label="Main navigation"
                    toggleLabel={{
                        expandedLabel: 'Minimize Navigation',
                        minimizedLabel: 'Expand Navigation'
                    }}
                >
                    <Navigation.Item
                        id="acc"
                        icon={<Avatar name="Name" />}
                        selected={this.state.activeItem === "account"}
                        onClick={() => { this.handleClick("account") }}
                    />
                    <Navigation.Item
                        icon={<IconDashboardLine/>}
                        label="Dashboard"
                        selected={this.state.activeItem === "dashboard"}
                        onClick={() => { this.handleClick("dashboard") }}
                    />
                    <Navigation.Item
                        id="cour"
                        icon={<IconCoursesLine/>}
                        label="Course"
                        selected={this.state.activeItem === "course"}
                        onClick={() => { this.handleClick("course") }}
                    />
                    <Navigation.Item
                        icon={<IconCalendarMonthLine/>}
                        label="Calendar"
                        selected={this.state.activeItem === "calendar"}
                        onClick={() => { this.handleClick("calendar") }}
                    />
                    <Navigation.Item
                        icon={<IconInboxLine/>}
                        label="Inbox" 
                        selected={this.state.activeItem === "inbox"}
                        onClick={() => { this.handleClick("inbox") }}
                    />
                    <Navigation.Item
                        id="help"
                        icon={<IconQuestionLine/>}
                        label="Help"
                        selected={this.state.activeItem === "help"}
                        onClick={() => { this.handleClick("help") }}
                    />
                </Navigation>
                <MyTray isTrayOpen={this.state.isTrayOpen} activeItem={this.state.activeItem} close={this.closeTray} accountName={this.props.accountName} courseName={this.props.courseName}/>
            </div>
        );
    }
}



export default Nav;