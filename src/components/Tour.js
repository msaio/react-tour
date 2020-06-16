import React, { useState } from 'react';
import Tour from 'reactour';

function MTour() {
    const [isTourOpen, openTour] = useState(true);
    function closeTour() {
        openTour(!isTourOpen);
    }
    const [current, changeCurrent] = useState("");
    function handleCurrent(cur) {
        changeCurrent(cur);
    }
    const [trayOpen, openTray] = useState(false);
    function handleTray() {
        openTray(!trayOpen);
    }

    let tourCfg = [
        {
            selector: "#navi",
            content: ({ goTo, inDOM }) => {
                return (
                    <div>
                        0
                        <button onClick={() => {
                            if (trayOpen === false) {
                                document.getElementById("acc").click();
                                handleCurrent("acc");
                                handleTray();
                                goTo(1);
                            } else {
                                if( current === "acc"){
                                    goTo(1);
                                }else{
                                    document.getElementById("acc").click();
                                    handleCurrent("acc");
                                    goTo(1);
                                }
                            }
                        }}>Next</button>
                        <br />
                        {inDOM && '🎉 Look at your step!'}
                    </div>
                );
            },
            // stepInteraction: false,
            position: "right",
        },

        {
            selector: '#thistray',
            content: ({ goTo, inDOM }) => (
                <div>
                    1
                    <button onClick={() => {
                        if (trayOpen === false) {
                            handleCurrent("");
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
                    {inDOM && '🎉 Look at your step!'}
                </div>
            ),
            position: "right",
            action: () => { console.log("S2"); },
            // stepInteraction: false,
        },
        {
            selector: '#thistray',
            content: ({ goTo, inDOM }) => (
                <div>
                    2
                    <button onClick={() => {
                        if (trayOpen === false) {
                            document.getElementById("acc").click();
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
                        /////////////////////////////////////
                    }}>Next</button>
                    <br />
                    {inDOM && '🎉 Look at your step!'}
                </div>
            ),
            position: "right",
            action: () => { console.log("S2"); },
            // stepInteraction: false,
        },
    ];


    return (
        <Tour
            steps={tourCfg}
            isOpen={isTourOpen}
            onRequestClose={closeTour}
            showNumber={false}
            showButtons={false}
            disableDotsNavigation={false}
            showNavigation={false}
        />
    );
}

export default MTour;
