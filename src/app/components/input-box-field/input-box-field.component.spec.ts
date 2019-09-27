/***********************************************************************************************************************
 * © 2018 - 2019 Infosys Limited, Bangalore, India; Infosys McCamish Systems, USA. All Rights Reserved                 *
 * Infosys and Infosys McCamish are registered trademarks of the respective companies.                                 *
 *                                                                                                                     *
 * Release Version: 1.0                                                                                                *
 *                                                                                                                     *
 * Except for any free or open source software components embedded in this Infosys proprietary software program        *
 * ("Program"), this Program is protected by copyright laws, international treaties and other pending or existing      *
 * intellectual property rights in India, the United States and other countries. Except as expressly permitted,        *
 * any unauthorized reproduction, storage, transmission in any form or by any means (including without limitation      *
 * electronic, mechanical, printing, photocopying, recording or otherwise), or any distribution of this Program,       *
 * or any portion of it, may result in severe civil and criminal penalties, and will be prosecuted to the maximum      *
 * extent possible under the law.                                                                                      *
 **********************************************************************************************************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMaskModule, MaskService } from 'ngx-mask';

import { InputBoxFieldComponent } from './input-box-field.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Element } from '../../models/element.model';
import { IpasFormControl } from '../../models/ipasFormControl.model';
import { ElementMetaObject } from '../../models/elementMetaObject.model';
import { MetaService } from '../../services/meta/meta.service';

describe('InputBoxFieldComponent', () => {
  let component: InputBoxFieldComponent;
  let fixture: ComponentFixture<InputBoxFieldComponent>;
  let metaService: MetaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputBoxFieldComponent],
      providers: [MetaService, MaskService],
      imports: [FormsModule, ReactiveFormsModule, NgxMaskModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxFieldComponent);
    component = fixture.componentInstance;
    metaService = TestBed.get(MetaService);
  });

  it('should create', () => {
    metaService.getMetaObject()[38] = new ElementMetaObject(
      38,
      38,
      'descriptionOfDuties',
      'InsurerInfo.insurerDetail_0.employmentInformation.descriptionOfDuties',
      new Element(),
      'InsurerInfo',
      'insurerDetail_0',
      false,
      false
    );

    component.subSectionFormRef = new FormGroup({
      descriptionOfDuties: new IpasFormControl('')
    });
    component.xpath = 'InsurerInfo.insurerDetail_0.employmentInformation';
    component.fieldConfig = {
      name: 'descriptionOfDuties',
      label: 'Description of Duties',
      mandatory: false,
      dataType: 'textAreaType',
      elementType: 'field',
      metaDataObjectId: 38
    } as Element;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create even if xpath does not match', () => {
    metaService.getMetaObject()[38] = new ElementMetaObject(
      38,
      38,
      'descriptionOfDuties',
      'InsurerInfo.insurerDetail_0.employmentInformation.descriptionOfDuties',
      new Element(),
      'InsurerInfo',
      'insurerDetail_0',
      false,
      false
    );
    metaService.getMetaObject()[10] = new ElementMetaObject(
      10,
      10,
      'descriptionOfDuties',
      'InsurerInfo.insurerDetail_0.employmentInformation.descriptionOfDuties',
      new Element(),
      'InsurerInfo',
      'insurerDetail_0',
      false,
      false
    );

    component.subSectionFormRef = new FormGroup({
      descriptionOfDuties: new IpasFormControl('')
    });
    component.xpath = 'InsurerInfo.insurerDetail_0.employmentInformation';
    component.fieldConfig = {
      name: 'descriptionOfDuties',
      label: 'Description of Duties',
      mandatory: false,
      enabled: 'true',
      dataType: 'textAreaType',
      elementType: 'field',
      metaDataObjectId: 10
    } as Element;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
