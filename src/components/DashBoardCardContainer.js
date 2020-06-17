import React from 'react';

import { Grid, GridCol } from '@instructure/ui-grid'
import { View } from '@instructure/ui-view';
import { Heading } from '@instructure/ui-heading';
import DashBoardCard from './DashBoardCard';

function DashBoardCardContainer(){
    return (
        <View>
            <Heading as="h2" level="h3">Class</Heading>
            <hr />
            <Grid startAt="large">
                <Grid.Row>
                    <Grid.Col>
                        <DashBoardCard />
                    </Grid.Col>
                    <Grid.Col>
                        <DashBoardCard />
                    </Grid.Col>
                    <Grid.Col>
                        <DashBoardCard />
                    </Grid.Col>
                </Grid.Row>
            </Grid>
        </View>
    );
}

export default DashBoardCardContainer;