import { LightningElement } from 'lwc';
import HEADSHOTS from '@salesforce/resourceUrl/HeadShot';

export default class PortfolioHomePage extends LightningElement {

    imageURL = HEADSHOTS + '/My_Headshot.jpg';

}