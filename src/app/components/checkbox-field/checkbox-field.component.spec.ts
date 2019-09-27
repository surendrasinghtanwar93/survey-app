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
import { CheckboxFieldComponent } from './checkbox-field.component';
import { TemplateService } from '../../services/template/template.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Element } from '../../models/element.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { IpasFormControl } from '../../models/ipasFormControl.model';
import { ElementMetaObject } from '../../models/elementMetaObject.model';
import { MetaService } from '../../services/meta/meta.service';

describe('CheckboxFieldComponent', () => {
  let component: CheckboxFieldComponent;
  let fixture: ComponentFixture<CheckboxFieldComponent>;
  let metaService: MetaService;
  let httpTestingController: HttpTestingController;
  let getRefDataSpy: jasmine.Spy;

  const expectedData = {
    body: [
      {
        category: 'perStripes',
        code: 'perSt',
        description: 'Per Stripes',
        factPattern: 'string',
        factRqd: false,
        id: 0,
        metastate: 'string',
        ruleTypeBoolean: true,
        value: 'perSt'
      }
    ]
  };

  beforeEach(async(() => {
    const templateService = jasmine.createSpyObj('TemplateService', ['getRefData']);
    getRefDataSpy = templateService.getRefData.and.returnValue(of(expectedData));
    TestBed.configureTestingModule({
      declarations: [CheckboxFieldComponent],
      providers: [MetaService, { provide: TemplateService, useValue: templateService }],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFieldComponent);
    component = fixture.componentInstance;
    metaService = TestBed.get(MetaService);
    // templateService = TestBed.get(TemplateService);
    httpTestingController = TestBed.get(HttpTestingController);

    metaService.getMetaObject()[190] = new ElementMetaObject(
      190,
      190,
      'perStripes',
      'benefeciaryDetails.benefeciaryDetail_0.benefeciaryPersonalDetail.beneTypeCond.value.benePersonDetail.perStripes',
      new Element(),
      'benefeciaryDetails',
      'benefeciaryDetail_0',
      false,
      false
    );

    metaService.getMetaObject()[191] = new ElementMetaObject(
      191,
      191,
      'perStripes',
      'benefeciaryDetails.benefeciaryDetail_0.benefeciaryPersonalDetail.beneTypeCond.value.benePersonDetail.perStripes',
      new Element(),
      'benefeciaryDetails',
      'benefeciaryDetail_0',
      false,
      false
    );

    component.subSectionFormRef = new FormGroup({
      perStripes: new IpasFormControl()
    });
    component.xpath =
      'benefeciaryDetails.benefeciaryDetail_0.benefeciaryPersonalDetail.beneTypeCond.value.benePersonDetail';
    component.fieldConfig = {
      name: 'perStripes',
      label: 'Stripers',
      mandatory: false,
      dataType: 'perStripesCBType',
      elementType: 'field',
      metaDataObjectId: 190
    } as Element;

    component.fieldDetail = {
      name: 'perStripesCBType',
      complex: false,
      elementType: 'field',
      dataType: 'text',
      refLookUpCategory: 'perStripes',
      displayType: 'MULTI_SELECT_MULTI_VALUE_CHECKBOX'
    };
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should update the form value after click on checkbox', () => {
    component.fieldConfig.metaDataObjectId = 191;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.custom-control-input')).nativeElement;
    element.click();
    expect(component.subSectionFormRef.value[component.fieldConfig.name]).toEqual([component.listOptions[0]]);
    element.click();
    expect(component.subSectionFormRef.value[component.fieldConfig.name]).toEqual([]);
  });
});
