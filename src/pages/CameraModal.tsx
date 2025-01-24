import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonFooter,
    IonFabButton,
    IonGrid,
    IonCol,
    IonRow
} from '@ionic/react';
import { close, chevronForwardCircleOutline, images, gridOutline } from 'ionicons/icons';

interface CameraModalProps {
    onDismiss: () => void;
}

const CameraModal: React.FC<CameraModalProps> = ({ onDismiss }) => {
    const [showGrid, setShowGrid] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid className="ion-no-padding">
                        <IonRow className="ion-align-items-center ion-justify-content-between">
                            <IonCol className="ion-text-start">
                                <IonButton color="success" fill="clear" shape="round" onClick={onDismiss}>
                                    <IonIcon slot="icon-only" icon={close} />
                                </IonButton>
                            </IonCol>

                            <IonCol className="ion-text-center">
                                <IonButton
                                    color="success"
                                    fill="clear"
                                    shape="round"
                                    onClick={() => setShowGrid(!showGrid)}
                                >
                                    <IonIcon slot="icon-only" icon={gridOutline} />
                                </IonButton>
                            </IonCol>

                            <IonCol className="ion-text-end">
                                <IonTitle color="success">Camera</IonTitle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-content">
                {/* Grid Overlay - Only rendered once here */}
                {showGrid && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: 'none',
                        zIndex: 1
                    }}>
                        {/* Vertical Lines */}
                        <div style={{
                            position: 'absolute',
                            left: '25%',
                            width: '1px',
                            height: '100%',
                            backgroundColor: 'rgba(0, 255, 0, 0.4)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            width: '1px',
                            height: '100%',
                            backgroundColor: 'rgba(0, 255, 0, 0.4)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            left: '75%',
                            width: '1px',
                            height: '100%',
                            backgroundColor: 'rgba(0, 255, 0, 0.4)'
                        }} />

                        {/* Horizontal Lines */}
                        <div style={{
                            position: 'absolute',
                            top: '25%',
                            width: '100%',
                            height: '1px',
                            backgroundColor: 'rgba(0, 255, 0, 0.4)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            width: '100%',
                            height: '1px',
                            backgroundColor: 'rgba(0, 255, 0, 0.4)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: '75%',
                            width: '100%',
                            height: '1px',
                            backgroundColor: 'rgba(0, 255, 0, 0.4)'
                        }} />
                    </div>
                )}
            </IonContent>

            <IonFooter className="ion-no-border">
                <IonToolbar>
                    <div className="ion-text-center" style={{ padding: '20px' }}>
                        <IonButtons className="ion-justify-content-between">
                            <IonButton color="success">
                                <IonIcon icon={images} slot="icon-only" />
                            </IonButton>

                            <IonFabButton
                                color="success"
                                style={{ width: '64px', height: '64px' }}
                            >
                            </IonFabButton>

                            <IonButton color="success">
                                <IonIcon icon={chevronForwardCircleOutline} slot="icon-only" />
                            </IonButton>
                        </IonButtons>
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default CameraModal;
