/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../build/components/body/body-cell.component';
const styles_DataTableBodyCellComponent:any[] = ([] as any[]);
export const RenderType_DataTableBodyCellComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableBodyCellComponent,
  data: {}
}
);
function View_DataTableBodyCellComponent_1():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),3,'label',[[
        'class',
        'datatable-checkbox'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n        ']),
      import0.ɵeld(0,(null as any),(null as any),0,'input',[[
        'type',
        'checkbox'
      ]
      ],[[
        3,
        'checked',
        0
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.onCheckboxChange($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.isSelected;
    check(view,2,0,currVal_0);
  });
}
function View_DataTableBodyCellComponent_2():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),[[
        3,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.value;
    check(view,0,0,currVal_0);
  });
}
function View_DataTableBodyCellComponent_4():import0.ɵViewDefinition {
  return import0.ɵvid(0,[import0.ɵted((null as any),['\n      '])],(null as any),(null as any));
}
function View_DataTableBodyCellComponent_3():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_DataTableBodyCellComponent_4),
    import0.ɵdid(270336,(null as any),0,import1.NgTemplateOutlet,[import0.ViewContainerRef],{
      ngTemplateOutlet: [
        0,
        'ngTemplateOutlet'
      ]
      ,
      ngOutletContext: [
        1,
        'ngOutletContext'
      ]

    }
    ,(null as any)),
    import0.ɵpod([
      'value',
      'row',
      'column'
    ]
    ),
    import0.ɵand(0,(null as any),(null as any),0)
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.column.cellTemplate;
    const currVal_1:any = check(view,2,0,comp.value,comp.row,comp.column);
    check(view,1,0,currVal_0,currVal_1);
  },(null as any));
}
export function View_DataTableBodyCellComponent_0():import0.ɵViewDefinition {
  return import0.ɵvid(2,[
    import0.ɵted((null as any),['\n    ']),
      import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'datatable-body-cell-label'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableBodyCellComponent_1),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableBodyCellComponent_2),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableBodyCellComponent_3),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n    ']),
    import0.ɵted((null as any),['\n  '])
  ]
  ,(check,view) => {
    var comp:import2.DataTableBodyCellComponent = view.component;
    const currVal_0:any = comp.column.checkboxable;
    check(view,4,0,currVal_0);
    const currVal_1:boolean = !comp.column.cellTemplate;
    check(view,7,0,currVal_1);
    const currVal_2:any = comp.column.cellTemplate;
    check(view,10,0,currVal_2);
  },(null as any));
}
const RenderType_DataTableBodyCellComponent_Host:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_DataTableBodyCellComponent_Host_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),1,'datatable-body-cell',[[
        'class',
        'datatable-body-cell'
      ]
    ],[
      [
        3,
        'className',
        0
      ]
      ,
      [
        1,
        'active'
      ]
      ,
      [
        1,
        'sort-active'
      ]
      ,
      [
        1,
        'sort-asc'
      ]
      ,
      [
        1,
        'sort-desc'
      ]
      ,
      [
        2,
        'width',
        'px'
      ]
      ,
      [
        2,
        'height',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'focus'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'click'
      ]
      ,
      [
        (null as any),
        'dblclick'
      ]
      ,
      [
        (null as any),
        'keydown'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      if (('focus' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnov(view,1).onFocus()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('blur' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnov(view,1).onBlur()) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('click' === eventName)) {
        const pd_2:any = ((<any>import0.ɵnov(view,1).onClick($event)) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('dblclick' === eventName)) {
        const pd_3:any = ((<any>import0.ɵnov(view,1).onDblClick($event)) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('keydown' === eventName)) {
        const pd_4:any = ((<any>import0.ɵnov(view,1).onKeyDown($event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      return allowDefault;
    },View_DataTableBodyCellComponent_0,RenderType_DataTableBodyCellComponent),
    import0.ɵdid(24576,(null as any),0,import2.DataTableBodyCellComponent,[import0.ElementRef],(null as any),(null as any))
  ]
  ,(null as any),(check,view) => {
    const currVal_0:any = import0.ɵnov(view,1).columnCssClasses;
    const currVal_1:any = import0.ɵnov(view,1).isFocused;
    const currVal_2:any = import0.ɵnov(view,1).isSortActive;
    const currVal_3:any = import0.ɵnov(view,1).isSortAscending;
    const currVal_4:any = import0.ɵnov(view,1).isSortDescending;
    const currVal_5:any = import0.ɵnov(view,1).width;
    const currVal_6:any = import0.ɵnov(view,1).height;
    check(view,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  });
}
export const DataTableBodyCellComponentNgFactory:import0.ComponentFactory<import2.DataTableBodyCellComponent> = import0.ɵccf('datatable-body-cell',import2.DataTableBodyCellComponent,View_DataTableBodyCellComponent_Host_0);