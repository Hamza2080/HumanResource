import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpServiceService } from 'src/app/shared/services/http-service.service';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @ViewChild('lgModal') public modal: ModalDirective;

    private userForm: any;
    private userData: any = [];
    private error: any;
    private modalRef: BsModalRef;
    private userError: boolean = false;
    private userSuccess: boolean = false;
    private template: TemplateRef<any>;

    constructor(
        private fb: FormBuilder,
        private httpService: HttpServiceService,
        private modalService: BsModalService
    ) { }

    ngOnInit() {

        this.userFormInitializer();
        // get user data from get api method in service 
        this.httpService.getData()
            .subscribe(
                data => this.userData = data,
                error => {
                    this.userError = true;
                    console.error(error);
                    setTimeout(() => {
                        this.userError = false;
                    }, 3000);
                }
            )
    }

    /**
     * @author : Hamza Javed
     * @method : createUserFormuilder
     * input   : Nill
     * output  : Nill
     * @description : initialize user_form with form builder object
     */
    userFormInitializer() {
        this.userForm = this.fb.group({
            name: ["", [Validators.required]],
            email: [
                "",
                [
                    Validators.required,
                    Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
                ]
            ],
            address: ["", [Validators.required]],
            company: ["", [Validators.required]],
        });
    }

    /**
     * @author : Hamza Javed
     * @method : submitUserForm
     * input   : Nill
     * output  : Nill
     * @description : submit user form data
     */
    submitUserForm() {
        this.httpService
            .postData(this.userForm.value)
            .subscribe(data => {
                this.userSuccess = true;
                setTimeout(() => {
                    this.userSuccess = false;
                    this.modal.hide()
                }, 3000);
            }, error => {
                this.userError = true;
                console.error(error);
                setTimeout(() => {
                    this.userError = false;
                }, 3000);
            })
    }
}
