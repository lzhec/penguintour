import {trigger, transition, style, query, group, animateChild, animate, keyframes} from '@angular/animations';

export const visibility = trigger('visibility',
[transition(':enter', [style({
    opacity: 0
}), animate(2000, style({
    opacity: 1
}))
])])

export const fader = trigger('fader',
  [transition(':enter', [style({
    opacity: 0,
    transform: 'scale(0) translateY(100%)',
  }), animate(600, style({
    opacity: 1,
    transform: 'scale(1) translateY(0)'
  }))
  ])])

export const visibilityPopup = trigger('visibilityPopup',
[transition(':enter',
[style({opacity: 0}),
     animate(1000, style({opacity: 1}))]),
     transition(':leave',
      [animate(1000, style({opacity: 0}))])
    ])

export const fader2 = trigger('fader2',
  [transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'relative',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    query(':enter', [
      animate('600ms ease',
        style({opacity: 1, transform: 'scale(1) translateY(0)'})
      ),
    ])
  ])
])

// export const leftSlider = trigger('leftSlider',
//   [transition(':enter',
//     [style({left: '-100%'})])])

export const slider = trigger('slider',
  [transition('center => left', slideTo('left')),
  transition('center => left-left', slideTo('left')),
  transition('right => left', slideTo('left')),
  transition('right => center', slideTo('left')),
  transition('right => left-left', slideTo('left')),
  transition('right-right => left', slideTo('left')),
  transition('right-right => center', slideTo('left')),
  transition('right-right => left-left', slideTo('left')),
  transition('left => left-left', slideTo('left')),
  transition('right-right => right', slideTo('left')),
  transition('center => right', slideTo('right')),
  transition('center => right-right', slideTo('right')),
  transition('left => right', slideTo('right')),
  transition('left => center', slideTo('right')),
  transition('left => right-right', slideTo('right')),
  transition('right => right-right', slideTo('right')),
  transition('left-left => left', slideTo('right')),
  transition('left-left => right', slideTo('right')),
  transition('left-left => center', slideTo('right')),
  transition('left-left => right-right', slideTo('right'))
])

function slideTo(direction) {
  const optional = { optional: true }
  return [
    query(':enter, :leave', [
      style({
        position: 'relative',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({[direction]: '0'}))
      ], optional),
    ])
  ]
}
