import React, { useState } from 'react';
import Tour from 'reactour';
import { Transition } from '@instructure/ui-motion';
import { View } from '@instructure/ui-view';
import { Heading } from '@instructure/ui-heading';
import { List } from '@instructure/ui-list';
import { Text } from '@instructure/ui-text';
import { Link } from '@instructure/ui-link'
import { Button } from '@instructure/ui-buttons';
import { Popover } from '@instructure/ui-popover'

function MTour() {
    const [isTourOpen, changeOpenTour] = useState(false);
    function closeTour() {
        changeOpenTour(false);
    }
    function openTour() {
        changeOpenTour(true);
    }
    const [startAt, changeStartAt] = useState(0);
    function fire(pos) {
        changeStartAt(pos);
    }
    const [current, changeCurrent] = useState("");
    function handleCurrent(cur) {
        changeCurrent(cur);
    }
    const [trayOpen, openTray] = useState(false);
    function handleTray() {
        openTray(!trayOpen);
    }

    const [isFirst, changeFirst] = useState(true);
    function makeItFirst(){
        changeFirst(true);
    }
    function makeItNotFirst(){
        changeFirst(false);
    }

    let tourCfg = [
        // 0
        {
            selector: "",
            content: ({ goTo, inDOM }) => {
                return (
                    <div>
                        <Heading>HELLO TOUR dqwdqwd</Heading>
                        <hr/>
                        <Link href="google.com">bqwdqwdqwqwqwdqdw</Link>
                        <br />
                        <button onClick={() => {
                            if(trayOpen === false){
                                makeItFirst();
                                closeTour();
                            }
                            else {
                                document.getElementById("acc").click();
                                makeItFirst();
                                closeTour();
                            }
                        }}>Cancel</button>
                        <button onClick={() => {
                            if (trayOpen === false) {
                                document.getElementById("acc").click();
                                handleCurrent("acc");
                                handleTray();
                                goTo(1);
                            } else {
                                if (current === "acc") {
                                    goTo(1);
                                } else {
                                    document.getElementById("acc").click();
                                    handleCurrent("acc");
                                    goTo(1);
                                }
                            }
                        }}>Next</button>
                        <br />
                        '1/4'
                    </div>
                );
            },
            // stepInteraction: false,
            position: "center",
        },
        // 1 acc
        {
            selector: '#thistray',
            content: ({ goTo, inDOM }) => (
                <div>
                    <Heading>HELLO TOUR</Heading>
                        <hr/>
                        <Link href="google.com">bqwdqwdqwqwqwdqdw</Link>
                        <br />
                    <iFrame 
                        src="https://player.vimeo.com/video/75514816?title=0&byline=0&portrait=0" 
                        width="300" height="150" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
                    </iFrame>
                    
                    <button onClick={() => {
                        if (trayOpen === false) {
                            handleCurrent("acc");
                            goTo(0);
                        } else {
                            document.getElementById("acc").click();
                            handleTray();
                            handleCurrent("");
                            goTo(0);
                        }
                    }}>Prev</button>
                    <button onClick={() => {
                        if (trayOpen === false) {
                            document.getElementById("cour").click();
                            handleCurrent("cour");
                            handleTray();
                            goTo(2);
                        } else {
                            document.getElementById("cour").click();
                            handleCurrent("cour");
                            goTo(2);
                        }
                    }}>Next</button>
                    <br />
                    {inDOM && '2/4'}
                </div>
            ),
            position: "right",
            action: () => { console.log("S2"); },
            // stepInteraction: false,
        },
        // 2 cour
        {
            selector: '#thistray',
            content: ({ goTo, inDOM }) => (
                <div>
                    <Heading>HELLO TOUR</Heading>
                        <hr/>
                        <Link href="google.com">bqwdqwdqwqwqwdqdw</Link>
                        <br />
                    <iFrame 
                        src="https://player.vimeo.com/video/69658934?title=0&byline=0&portrait=0" 
                        width="300" height="150" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
                    </iFrame>
                   
                    <button onClick={() => {
                        if (trayOpen === false) {
                            handleCurrent("acc");
                            handleTray();
                            goTo(1);
                        } else {
                            document.getElementById("acc").click();
                            handleCurrent("acc");
                            goTo(1);
                        }
                    }}>Prev</button>
                    <button onClick={() => {
                        if (trayOpen === false) {
                            document.getElementById("help").click();
                            handleCurrent("help");
                            handleTray();
                            goTo(3);
                        } else {
                            document.getElementById("help").click();
                            handleCurrent("help");
                            goTo(3);
                        }
                    }}>Next</button>
                    <br />
                    {inDOM && '3/4'}
                </div>
            ),
            position: "right",
            action: () => { console.log("S2"); },
            // stepInteraction: false,
        },
        // 3
        {
            selector: '#thistray',
            content: ({ goTo, inDOM }) => (
                <div>
                    <List>
                        <List.Item><Link href="https://www.canvaslms.com/try-canvas">Canvas by Instructure</Link></List.Item>
                        <List.Item><Link href="https://www.getbridge.com">Bridge by Instructure</Link></List.Item>
                        <List.Item>
                            <Link href="https://www.arcmedia.com">Arc by Instructure</Link>
                            <List>
                                <List.Item><Link href="https://www.canvaslms.com/try-canvas">Canvas by Instructure</Link></List.Item>
                                <List.Item><Link href="https://www.getbridge.com">Bridge by Instructure</Link></List.Item>
                                <List.Item><Link href="https://www.arcmedia.com">Arc by Instructure</Link></List.Item>
                            </List>
                        </List.Item>
                    </List>
                    <button onClick={() => {
                        if (trayOpen === false) {
                            document.getElementById("cour").click();
                            handleCurrent("cour");
                            handleTray();
                            goTo(2);
                        } else {
                            document.getElementById("cour").click();
                            handleCurrent("cour");
                            goTo(2);
                        }
                    }}>Prev</button>
                    <button onClick={() => {
                        if(trayOpen === false){
                            handleCurrent("");
                            goTo(4)
                        } else {
                            document.getElementById("help").click();
                            handleCurrent("");
                            goTo(4)
                        }
                    }}>Close</button>
                    <br />
                    {inDOM && '4/4'}
                </div>
            ),
            position: "right",
            action: () => { console.log("S3"); },
            // stepInteraction: false,
        },


        // End Tour
        {
            selector: "",
            content: ({ goTo, inDOM }) => (
                <div>
                    Thanks!<button onClick={() => { closeTour(); }}>Close</button>
                    <br />
                    {inDOM && 'Bye!'}
                </div>
            ),
        }
    ];



    return (
        <div>
            {
                isFirst === true && <div
                style={{
                    position: "fixed",
                    backgroundColor: "white",
                    top: "100px", left: "100px",
                    zIndex: "9999",
                    border: "solid black",
                    width: "480px",
                    height: "500px",
                }}
                id="beg"
            >
                <View
                >
                    <Heading>Hello</Heading>
                    <Text>BlablaBlala</Text>
                    <List>
                        <List.Item><Link href="https://www.canvaslms.com/try-canvas">Canvas by Instructure</Link></List.Item>
                        <List.Item><Link href="https://www.getbridge.com">Bridge by Instructure</Link></List.Item>
                        <List.Item>
                            <Link href="https://www.arcmedia.com">Arc by Instructure</Link>
                            <List>
                                <List.Item><Link href="https://www.canvaslms.com/try-canvas">Canvas by Instructure</Link></List.Item>
                                <List.Item><Link href="https://www.getbridge.com">Bridge by Instructure</Link></List.Item>
                                <List.Item><Link href="https://www.arcmedia.com">Arc by Instructure</Link></List.Item>
                            </List>
                        </List.Item>
                    </List>
                    <Button onClick={() => { fire(tourCfg.length - 1); openTour(); document.getElementById("beg").remove(); }} >Close</Button>
                    <Button onClick={() => { fire(0); openTour(); makeItNotFirst() }} >Start</Button>
                </View>
                </div>
            }
            <Tour
                steps={tourCfg}
                isOpen={isTourOpen}
                onRequestClose={closeTour}
                showNumber={false}
                showButtons={false}
                disableDotsNavigation={false}
                showNavigation={false}
                startAt={startAt}
            />
        </div >
    );
}

export default MTour;
