import {
  IonContent,
  IonPage,
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  useIonModal
} from '@ionic/react';
import { skull, image, camera } from 'ionicons/icons';
import { useRef } from 'react';
import CameraModal from './CameraModal';
import './Create.css';

const Create: React.FC = () => {
    const [presentModal, dismissModal] = useIonModal(CameraModal, {
        onDismiss: () => dismissModal()
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleGalleryClick = () => {
        // Trigger hidden file input
        fileInputRef.current?.click();
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selectedFile = files[0];
            // Handle the selected file here
            console.log('Selected file:', selectedFile);
        }
    };

    return (
        <IonPage>
            <IonContent className="padding">
                {/* Hidden file input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                />

                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-padding verticle ion-padding-horizontal">
                            <IonIcon size="large" color="success" icon={skull} aria-hidden="true"/>
                        </IonCol>
                        <IonCol className="ion-padding-verticle ion-padding-horizontal">
                            <IonText className="ion-text-right"><h4>@Username</h4></IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid>
                    <IonRow className="ion-justify-content-center ion-align-items-center">
                        <IonCol className="ion-text-center">
                            <IonButton 
                                color="success" 
                                size="large" 
                                className="big-button"
                                onClick={handleGalleryClick}
                            >
                                <IonIcon icon={image} />
                            </IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-center ion-align-items-center">
                        <IonCol className="ion-text-center">
                            <IonButton
                                color="success"
                                size="large"
                                className="big-button"
                                onClick={() => presentModal({
                                    initialBreakpoint: 1,
                                    breakpoints: [0, 1]
                                })}
                            >
                                <IonIcon icon={camera} />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Create;
