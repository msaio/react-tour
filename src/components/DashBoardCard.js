import React from 'react';
import { View } from '@instructure/ui-view';
import { Img } from '@instructure/ui-img';
import { Heading } from '@instructure/ui-heading';
import { Link } from '@instructure/ui-link';
import { Text } from '@instructure/ui-text';
import { Navigation, AppNav } from '@instructure/ui-navigation';
import { IconAssignmentLine, IconDiscussionLine } from '@instructure/ui-icons';

function DashBoardCard() {
    return (
        <View>
            <div style={{ height: "146", backgroundColor: "red", }}></div>
            <Link>
                <Heading as="h2" level="h3">Topic</Heading>
                <Text>Something</Text>
            </Link>
            <AppNav>
                <AppNav.Item renderLabel="Assign" renderIcon={<IconAssignmentLine/>}/>
                <AppNav.Item renderLabel="Discuss" renderIcon={<IconDiscussionLine/>}/>
            </AppNav>
        </View>
    );
}

export default DashBoardCard;