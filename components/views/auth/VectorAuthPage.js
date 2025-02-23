import React from 'react';
import * as sdk from 'matrix-react-sdk/src/index';
import SdkConfig from 'matrix-react-sdk/src/SdkConfig';

export default class VectorAuthPage extends React.PureComponent {
    static replaces = 'AuthPage'

    static welcomeBackgroundUrl;

    // cache the url as a static to prevent it changing without refreshing
    static getWelcomeBackgroundUrl() {
        if (VectorAuthPage.welcomeBackgroundUrl) return VectorAuthPage.welcomeBackgroundUrl;

        const brandingConfig = SdkConfig.get().branding;
        VectorAuthPage.welcomeBackgroundUrl = "themes/element/img/backgrounds/lake.jpg";
        if (brandingConfig && brandingConfig.welcomeBackgroundUrl) {
            if (Array.isArray(brandingConfig.welcomeBackgroundUrl)) {
                const index = Math.floor(Math.random() * brandingConfig.welcomeBackgroundUrl.length);
                VectorAuthPage.welcomeBackgroundUrl = brandingConfig.welcomeBackgroundUrl[index];
            } else {
                VectorAuthPage.welcomeBackgroundUrl = brandingConfig.welcomeBackgroundUrl;
            }
        }

        return VectorAuthPage.welcomeBackgroundUrl;
    }

    render() {
        const AuthFooter = sdk.getComponent('auth.AuthFooter');

        const pageStyle = {
            background: `center/cover fixed url(${VectorAuthPage.getWelcomeBackgroundUrl()})`,
        };

        const modalStyle = {
            position: 'relative',
            background: 'initial',
        };

        const blurStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            filter: 'blur(40px)',
            background: pageStyle.background,
        };

        const modalContentStyle = {
            display: 'flex',
            zIndex: 1,
            background: 'rgba(255, 255, 255, 0.59)',
            borderRadius: '8px',
        };

        return (
            <div className="mx_AuthPage" style={pageStyle}>
                <div className="mx_AuthPage_modal" style={modalStyle}>
                    <div className="mx_AuthPage_modalBlur" style={blurStyle} />
                    <div className="mx_AuthPage_modalContent" style={modalContentStyle}>
                        { this.props.children }
                    </div>
                </div>
                <AuthFooter />
            </div>
        );
    }
}
