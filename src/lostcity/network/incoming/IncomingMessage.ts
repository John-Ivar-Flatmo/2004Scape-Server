import ClientProtCategory from '#lostcity/network/incoming/prot/ClientProtCategory.js';

export default abstract class IncomingMessage {
    abstract readonly category: ClientProtCategory;
}
