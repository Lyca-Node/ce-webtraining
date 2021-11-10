/**
 * Created by cla on 07.04.2016.
 */

import React from 'react';
import {SinglePage, Registry} from 'cs-web-components-base';
import HelloWorld from '../components/HelloWorld';

export default class MainComponent extends React.Component {
    render() {
        const EmbeddedFrame = Registry.findComponent("cs-web-components-base-EmbeddedEmptyFrame");
        return (<SinglePage frameComponent={EmbeddedFrame}
                            pageContent={HelloWorld} />);
    }
}
