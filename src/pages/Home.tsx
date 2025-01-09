import { 
  IonContent, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonInput, 
  IonList, 
  IonButton, 
  IonLabel, 
  IonText, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonIcon, 
  IonSearchbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonThumbnail,
  IonTabs,
  IonTabBar,
  IonTabButton
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { skull, trashBin, open, home, addCircle, personCircle, } from 'ionicons/icons';

const Home: React.FC = () => {
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

        <IonSearchbar showClearButton="always" clearIcon={trashBin} placeHolder="Search" color="light"></IonSearchbar>
      
        <IonGrid>
          <IonRow>
            <IonCol className="ion-padding-horizontal">
              <IonText className="ion-text-left">
                <h3>Recent</h3>
              </IonText>
            </IonCol>
            <IonCol className="ion-padding-horizontal">
              <IonText className="ion-text-right">
                <h6>See all</h6>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonCard>
          <IonCardContent>
            <IonList>

              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonLabel>File_828e9udhi2dj9.pdf</IonLabel>
                  </IonRow>
                  <IonRow>
                    <IonLabel>dd-mm-yyyy</IonLabel>
                  </IonRow>
                </IonGrid>
                <IonThumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
              </IonItem>
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonLabel>File_828e9udhi2dj9.pdf</IonLabel>
                  </IonRow>
                  <IonRow>
                    <IonLabel>dd-mm-yyyy</IonLabel>
                  </IonRow>
                </IonGrid>
                <IonThumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
              </IonItem>
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonLabel>File_828e9udhi2dj9.pdf</IonLabel>
                  </IonRow>
                  <IonRow>
                    <IonLabel>dd-mm-yyyy</IonLabel>
                  </IonRow>
                </IonGrid>
                <IonThumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
              </IonItem>

            </IonList>
          </IonCardContent>
        </IonCard>
        

      </IonContent>
    </IonPage>
  );
};

export default Home;
