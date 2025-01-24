import React from 'react';
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
    
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-center ion-justify-content-between">
              {/* Left Column */}
              <IonCol className="ion-text-start">
                  <IonButton color="success" fill="clear" shape="round" onClick={onDismiss}>
                    <IonIcon slot="icon-only" icon={close} />
                  </IonButton>
              </IonCol>

              {/* Right Column */}
              <IonCol className="ion-text-end">
                <IonTitle color="success">Camera</IonTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent 
        fullscreen 
        className="ion-padding"
      >
        {/* Empty content area with dark theme */}
      </IonContent>
      {/* Add this footer section */}
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="ion-text-center" style={{ padding: '20px' }}>
            <IonButtons className="ion-justify-content-between">
              <IonButton color="success">
                <IonIcon icon={images} slot="icon-only" />
              </IonButton>
                
                {/* FAB Button for OK */}
            <IonFabButton color="success" style={{ width: '64px', height: '64px' }}>
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
