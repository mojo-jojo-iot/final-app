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
import CameraModal from './CameraModal';
import './Create.css';

const Create: React.FC = () => {
  const [presentModal, dismissModal] = useIonModal(CameraModal, {
    onDismiss: () => dismissModal()
  });

  return (
    <IonPage>
      <IonContent className="padding">
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
              <IonButton color="success" size="large" className="big-button">
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
