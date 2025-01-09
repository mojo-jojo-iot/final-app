import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonSearchbar,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { skull, home, person, mail, calendarClear, image, camera } from 'ionicons/icons';

interface ModalPageProps {
  closeModal: () => void;
}

const Camera: React.FC<ModalPageProps> = ({ closeModal }) => {
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

        <h2>Welcome to Modal's page</h2>

        <IonButton onClick={closeModal}>Close</IonButton>


      </IonContent>
    </IonPage>
  );
};

export default Camera;
