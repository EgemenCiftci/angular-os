export class Application {
  constructor(
    public src: any,
    public id?: number,
    public title?: string,
    public iconName?: string,
    public isHidden?: boolean,
    public isMaximized?: boolean,
    public isIframe?: boolean
  ) {}
}
