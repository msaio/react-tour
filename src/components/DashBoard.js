import React from 'react';
import DashBoardCard from './DashBoardCard';
import { View } from '@instructure/ui-view';
import { Heading } from '@instructure/ui-heading';
import { Grid } from '@instructure/ui-grid';
import ToDo from './ToDo';
import DashBoardCardContainer from './DashBoardCardContainer';
import { Text } from '@instructure/ui-text';
import { InlineList } from '@instructure/ui-list';


function DashBoard() {
    return (
        <View>
            <Grid startAt="medium">
                <Grid.Row>
                    <Grid.Col>
                        <Grid.Row>
                            <Heading>DASHBOARD</Heading>
                            <hr />
                        </Grid.Row>
                        <Grid.Row>
                            <DashBoardCardContainer />
                        </Grid.Row>
                        <Grid.Row>
                            <DashBoardCardContainer />
                        </Grid.Row>
                    </Grid.Col>
                    <Grid.Col>
                        <ToDo />
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <footer stype={{float: "right",}}>
                        <InlineList>
                            <InlineList.Item>
                                <Text>Privacy Policy</Text>
                            </InlineList.Item>
                            <InlineList.Item>
                                <Text>Acceptable Use Policy</Text>
                            </InlineList.Item>
                            <InlineList.Item>
                                <Text>Facebook</Text>
                            </InlineList.Item>
                            <InlineList.Item>
                                <Text>Twitter</Text>
                            </InlineList.Item>
                        </InlineList>
                    </footer>
                </Grid.Row>
            </Grid>
        </View>
    );
}
export default DashBoard;