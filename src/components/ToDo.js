import { Heading } from '@instructure/ui-heading'

import React from 'react';
import { View } from '@instructure/ui-view';
import { List } from '@instructure/ui-list';
import { Text } from '@instructure/ui-text';
import { Button } from '@instructure/ui-buttons';

function ToDo() {
    return (
        <View as="div" padding="medium" margin="" textAlign="left">
            <Heading as="h2" level="h3">
                To Do
                    </Heading>
            <hr />
            <List isUnstyled size="medium" margin="small 0">
                <List.Item>
                    <Text>1.</Text>
                </List.Item>
                <List.Item>
                    <Text>2.</Text>
                </List.Item>
                <List.Item>
                    <Text>3.</Text>
                </List.Item>
            </List>
            <Heading as="h2" level="h3">
                Coming Up
                    </Heading>
            <List isUnstyled size="medium" margin="small 0">
                <List.Item>
                    <Text>1.</Text>
                </List.Item>
                <List.Item>
                    <Text>2.</Text>
                </List.Item>
                <List.Item>
                    <Text>3.</Text>
                </List.Item>
            </List>
            <Heading as="h2" level="h3">
                Recent Feedback
                    </Heading>
            <hr />
            <List isUnstyled size="medium" margin="small 0">
                <List.Item>
                    <Text>1.</Text>
                </List.Item>
                <List.Item>
                    <Text>2.</Text>
                </List.Item>
                <List.Item>
                    <Text>3.</Text>
                </List.Item>
            </List>
            <Button>HelloWorld</Button>
            <Button>HelloWorld</Button>
        </View>
    );
}

export default ToDo;