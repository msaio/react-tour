import React, { Component } from 'react';
import { CloseButton, Button } from '@instructure/ui-buttons';
import { Tray } from '@instructure/ui-tray';
import { Flex } from '@instructure/ui-flex';
import { View } from '@instructure/ui-view';
import { Avatar } from '@instructure/ui-avatar';
import { Heading } from '@instructure/ui-heading';
import { List } from '@instructure/ui-list';
import { Link } from '@instructure/ui-link';
import { Text } from '@instructure/ui-text';



class MyTray extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.isTrayOpen,
            isActive: false,
        }
        this.hideTray = this.hideTray.bind(this);
        this.keepOpen = this.keepOpen.bind(this);
    }

    hideTray() {
        this.props.close();
    }
    keepOpen() {
        this.props.keepOpen();
    }
    renderCloseButton() {
        return (
            <Flex>
                <Flex.Item>
                    <CloseButton
                        placement="end"
                        offset="small"
                        screenReaderLabel="Close"
                        onClick={this.hideTray}
                    />
                </Flex.Item>
            </Flex>
        );
    }
    render() {
        // console.log("render Tray");
        return (        
                <Tray
                    label="Tray Example"
                    open={this.state.isActive ? this.state.open : this.props.isTrayOpen}
                    size="regular"
                    placement="start"
                    theme={{ zIndex: "99" }}
                    insertAt="bottom"
                    shouldCloseOnDocumentClick={false}
                    onClick={this.hideTray}
                    mountNode={ document.getElementById("tray") }
                >
                    {   this.props.activeItem === "account" &&
                        <div style={{ marginLeft: "84px", }} onClick={this.keepOpen}>
                            <div style={{ padding: "1.5rem"}} id="thisacc">
                                {this.renderCloseButton()}
                                <View as="div" padding="medium" margin="" textAlign="center">
                                    <View as="span" textAlign="center">
                                        <Avatar name="NH" size="x-large" margin="auto"/>
                                        <Heading as="h2" level="h3">
                                            {this.props.accountName}
                                        </Heading>
                                        <Button>Đăng xuất</Button>
                                    </View>
                                </View>
                                <hr /> 
                                <List isUnstyled size="medium" margin="small 0">
                                    <List.Item><Link href="https://www.canvaslms.com/try-canvas">Canvas by Instructure</Link></List.Item>
                                    <List.Item><Link href="https://www.getbridge.com">Bridge by Instructure</Link></List.Item>
                                    <List.Item><Link href="https://www.arcmedia.com">Arc by Instructure</Link></List.Item>
                                </List>
                            </div>
                        </div>
                    }
                    {   this.props.activeItem === "course" &&
                        <div style={{ marginLeft: "84px", }} onClick={()=>{console.log("Course")}}>
                            <div style={{ padding: "1.5rem"}}>
                            {this.renderCloseButton()}
                                <View as="span">
                                    <Heading as="h2" level="h3">{this.props.courseName}</Heading>
                                </View>
                                <hr /> 
                                <List isUnstyled size="medium" margin="small 0">
                                    <List.Item>
                                        <Link href="https://www.canvaslms.com/try-canvas">Canvas by Instructure</Link>
                                        <Text as="div" letterSpacing="normal" size="x-small" weight="light">Canvas by Instructure</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Link href="https://www.getbridge.com">Bridge by Instructure</Link>
                                        <Text as="div" letterSpacing="normal" size="x-small" weight="light">Bridge by Instructure</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Link href="https://www.arcmedia.com">Arc by Instructure</Link>
                                        <Text as="div" letterSpacing="normal" size="x-small" weight="light">Arc by Instructure</Text>
                                    </List.Item>
                                    <List.Item><hr /></List.Item>
                                    <List.Item>
                                        <Link href="https://www.arcmedia.com">All Courses</Link>
                                    </List.Item>
                                </List>
                                <Text as="span">
                                    Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.
                                </Text>
                            </div>
                        </div>
                    }
                    {   this.props.activeItem === "help" &&
                        <div style={{ marginLeft: "84px", }} onClick={()=>{console.log("Help")}}>
                            <div style={{ padding: "1.5rem"}}>
                                {this.renderCloseButton()}
                                <View as="span">
                                    <Heading as="h2" level="h3">Help</Heading>
                                </View>
                                <hr />
                                <List isUnstyled size="medium" margin="small 0">
                                    <List.Item>
                                        <Link href="https://www.canvaslms.com/try-canvas">Canvas by Instructure</Link>
                                        <Text as="div" letterSpacing="normal" size="x-small" weight="light">Canvas by Instructure</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Link href="https://www.getbridge.com">Bridge by Instructure</Link>
                                        <Text as="div" letterSpacing="normal" size="x-small" weight="light">Bridge by Instructure</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Link href="https://www.arcmedia.com">Arc by Instructure</Link>
                                        <Text as="div" letterSpacing="normal" size="x-small" weight="light">Arc by Instructure</Text>
                                    </List.Item>
                                </List>
                            </div>
                        </div>
                    }

                </Tray>
            
        );
    }
}

export default MyTray;