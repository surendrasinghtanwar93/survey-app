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

import { RadioButtonFieldComponent } from './radio-button-field.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderService } from '../../services/builder/builder.service';
import { TemplateService } from '../../services/template/template.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Element } from '../../models/element.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { EventsService } from '../../services/events/event.service';
import { IpasFormControl } from '../../models/ipasFormControl.model';
import { ElementMetaObject } from '../../models/elementMetaObject.model';
import { MetaService } from '../../services/meta/meta.service';

describe('RadioButtonFieldComponent', () => {
  let component: RadioButtonFieldComponent;
  let fixture: ComponentFixture<RadioButtonFieldComponent>;
  let metaService: MetaService;

  const expectedData = {
    body: [
      {
        category: 'salutationTypeDrop',
        code: 'mr',
        description: 'Mr',
        factPattern: 'string',
        factRqd: false,
        id: 0,
        metastate: 'string',
        ruleTypeBoolean: true,
        value: 'Mr'
      },
      {
        category: 'salutationTypeDrop',
        code: 'ms',
        description: 'Ms',
        factPattern: 'string',
        factRqd: false,
        id: 0,
        metastate: 'string',
        ruleTypeBoolean: true,
        value: 'Ms'
      }
    ]
  };

  beforeEach(async(() => {
    const templateService = jasmine.createSpyObj('TemplateService', ['getRefData']);
    templateService.getRefData.and.returnValue(of(expectedData));
    TestBed.configureTestingModule({
      declarations: [RadioButtonFieldComponent],
      providers: [{ provide: TemplateService, useValue: templateService }, EventsService, MetaService],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonFieldComponent);
    component = fixture.componentInstance;
    metaService = TestBed.get(MetaService);

    metaService.getMetaObject()[3] = new ElementMetaObject(
      3,
      3,
      'salutation',
      'InsurerInfo.insurerDetail_0.insurerDetails.salutation',
      new Element(),
      'InsurerInfo',
      'insurerDetail_0',
      false,
      false
    );

    metaService.getMetaObject()[4] = new ElementMetaObject(
      4,
      4,
      'salutation',
      'InsurerInfo.insurerDetail_0.insurerDetails',
      new Element(),
      'InsurerInfo',
      'insurerDetail_0',
      false,
      false
    );

    component.subSectionFormRef = new FormGroup({
      salutation: new IpasFormControl('Ms')
    });
    component.xpath = 'InsurerInfo.insurerDetail_0.insurerDetails';
    component.fieldConfig = {
      name: 'salutation',
      label: 'Salutation',
      mandatory: false,
      dataType: 'salutationTypeDrop',
      elementType: 'field',
      metaDataObjectId: 3
    } as Element;

    component.fieldDetail = {
      name: 'salutationTypeDrop',
      complex: false,
      elementType: 'field',
      dataType: 'text',
      refLookUpCategory: 'salutationTypeDrop',
      displayType: 'SINGLE_SELECT_MULTI_VALUE'
    };
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should update the form value after selecting a value', () => {
    component.fieldConfig.metaDataObjectId = 4;
    component.fieldConfig.enabled = 'true';
    fixture.detectChanges();
    component.subSectionFormRef.patchValue({
      salutation: 'Mr'
    });
    expect(component.subSectionFormRef.value[component.fieldConfig.name]).toEqual('Mr');
  });
});
