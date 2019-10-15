
export class BaseComponent {

    public loading = false;
    public currentDataCall: any;
    public currentElementCall: any;
    public service: any;
    public toastr: any;
    public data: any;
    public element: any;

    constructor() {}

    loadData() {
      this.loading = true;
      if (this.currentDataCall) {
        this.currentDataCall.unsubscribe();
      }

      this.currentDataCall = this.service.getAll()
        .subscribe(response => {
          this.loading = false;
          if (response.result) {
            this.data = response.data;
          } else {
            this.toastr.error(response.message);
          }
      }, (error) => {
        this.loading = false;
        this.toastr.error('Ha ocurrido un error inesperado por favor vuelve a intentarlo.');
        console.log('server error!', error);
      });
    }

    loadElement(id) {
      this.loading = true;
      if (this.currentElementCall) {
        this.currentElementCall.unsubscribe();
      }

      this.currentElementCall = this.service.findOne(id)
        .subscribe(response => {
          this.loading = false;
          if (response.result) {
            this.element = response.data;
          } else {
            this.toastr.error(response.message);
          }
      }, (error) => {
        this.loading = false;
        this.toastr.error('Ha ocurrido un error inesperado por favor vuelve a intentarlo.');
        console.log('server error!', error);
      });
    }

}
