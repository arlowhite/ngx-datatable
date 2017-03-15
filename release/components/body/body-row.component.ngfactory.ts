/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './body-cell.component.ngfactory';
import * as import2 from '../../../../build/components/body/body-cell.component';
import * as import3 from '@angular/common';
import * as import4 from '../../../../build/components/body/body-row.component';
const styles_DataTableBodyRowComponent:any[] = ([] as any[]);
export const RenderType_DataTableBodyRowComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableBodyRowComponent,
  data: {}
}
);
function View_DataTableBodyRowComponent_2():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵeld(0,(null as any),(null as any),2,'datatable-body-cell',[
      [
        'class',
        'datatable-body-cell'
      ]
      ,
      [
        'tabindex',
        '-1'
      ]

    ]
    ,[
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
        'activate'
      ]
      ,
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
      var comp:any = view.component;
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
      if (('activate' === eventName)) {
        const pd_5:any = ((<any>comp.onActivate($event,view.context.index)) !== false);
        allowDefault = (pd_5 && allowDefault);
      }
      return allowDefault;
    },import1.View_DataTableBodyCellComponent_0,import1.RenderType_DataTableBodyCellComponent),
    import0.ɵdid(24576,(null as any),0,import2.DataTableBodyCellComponent,[import0.ElementRef],{
      row: [
        0,
        'row'
      ]
      ,
      column: [
        1,
        'column'
      ]
      ,
      rowHeight: [
        2,
        'rowHeight'
      ]
      ,
      isSelected: [
        3,
        'isSelected'
      ]

    }
    ,{activate: 'activate'}),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.row;
    const currVal_1:any = view.context.$implicit;
    const currVal_2:any = comp.rowHeight;
    const currVal_3:any = comp.isSelected;
    check(view,1,0,currVal_0,currVal_1,currVal_2,currVal_3);
  },(check,view) => {
    var comp:any = view.component;
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
function View_DataTableBodyRowComponent_1():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),5,'div',([] as any[]),[[
        3,
        'className',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any)),
    import0.ɵdid(139264,(null as any),0,import3.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableBodyRowComponent_2),
    import0.ɵdid(401408,(null as any),0,import3.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
    ,{
      ngForOf: [
        0,
        'ngForOf'
      ]
      ,
      ngForTrackBy: [
        1,
        'ngForTrackBy'
      ]

    }
    ,(null as any)),
    import0.ɵted((null as any),['\n    '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.stylesByGroup(view.context.$implicit.type);
    check(view,1,0,currVal_0);
    const currVal_1:any = view.context.$implicit.columns;
    const currVal_2:any = comp.columnTrackingFn;
    check(view,4,0,currVal_1,currVal_2);
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = import0.ɵinlineInterpolate(1,'datatable-row-',view.context.$implicit.type,' datatable-row-group');
    check(view,0,0,currVal_0);
  });
}
export function View_DataTableBodyRowComponent_0():import0.ɵViewDefinition {
  return import0.ɵvid(2,[
    import0.ɵted((null as any),['\n    ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableBodyRowComponent_1),
    import0.ɵdid(401408,(null as any),0,import3.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
    ,{
      ngForOf: [
        0,
        'ngForOf'
      ]
      ,
      ngForTrackBy: [
        1,
        'ngForTrackBy'
      ]

    }
    ,(null as any)),
    import0.ɵted((null as any),['\n  '])
  ]
  ,(check,view) => {
    var comp:import4.DataTableBodyRowComponent = view.component;
    const currVal_0:any = comp.columnsByPin;
    const currVal_1:any = comp.trackByGroups;
    check(view,2,0,currVal_0,currVal_1);
  },(null as any));
}
const RenderType_DataTableBodyRowComponent_Host:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_DataTableBodyRowComponent_Host_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵeld(0,(null as any),(null as any),1,'datatable-body-row',([] as any[]),[
      [
        3,
        'className',
        0
      ]
      ,
      [
        2,
        'height',
        'px'
      ]
      ,
      [
        2,
        'width',
        'px'
      ]

    ]
      ,[[
        (null as any),
        'keydown'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      if (('keydown' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnov(view,1).onKeyDown($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },View_DataTableBodyRowComponent_0,RenderType_DataTableBodyRowComponent),
    import0.ɵdid(24576,(null as any),0,import4.DataTableBodyRowComponent,[import0.ElementRef],(null as any),(null as any))
  ]
  ,(null as any),(check,view) => {
    const currVal_0:any = import0.ɵnov(view,1).cssClass;
    const currVal_1:any = import0.ɵnov(view,1).rowHeight;
    const currVal_2:any = import0.ɵnov(view,1).columnsTotalWidths;
    check(view,0,0,currVal_0,currVal_1,currVal_2);
  });
}
export const DataTableBodyRowComponentNgFactory:import0.ComponentFactory<import4.DataTableBodyRowComponent> = import0.ɵccf('datatable-body-row',import4.DataTableBodyRowComponent,View_DataTableBodyRowComponent_Host_0);