import { Component, OnInit } from '@angular/core';
import { EventCategoryDTO } from '../models/EventCategoryDTO';
import { PostWeekEventDTO } from '../models/PostWeekEventDTO';
import { EventService } from '../services/event.service';
declare const $:any;
declare const anime:any;
@Component({
  selector: 'app-admin-first',
  templateUrl: './admin-first.component.html',
  styleUrls: ['./admin-first.component.css']
})
export class AdminFirstComponent implements OnInit {
  
  parentNode!:any;
 
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    // this.animefunc();
    var basicTimeline = anime.timeline({
      autoplay: false
    });
    this.animejsfunc();
  
   
  }






  // animefunc(){
  //   const GLOBAL_CFG = {
  //     loop: true };
     
    
  //   function getRndInteger(min:any, max:any) {
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
    
  //   let swetCollection = document.querySelectorAll('.swet');
    
  //   swetCollection.forEach((el, index) => {
  //     anime({
  //       ...GLOBAL_CFG,
  //       targets: el,
  //       opacity: [0, 1, 0],
  //       delay: index * 100,
  //       duration: index * 1500,
  //       translateY: index * 2,
  //       easing: 'easeInOutSine' });
    
  //   });
    
  //   let spitCollection = document.querySelectorAll('.spit');
    
  //   spitCollection.forEach((el, index) => {
  //     anime({
  //       ...GLOBAL_CFG,
  //       targets: el,
  //       opacity: [0, 1, 0],
  //       delay: 500,
  //       duration: index * 1000,
  //       translateY: getRndInteger(-30, 30),
  //       translateX: getRndInteger(-30, 30),
  //       easing: 'easeInOutSine' });
    
  //   });
  //   let debreCollection = document.querySelectorAll('.debre');
    
  //   debreCollection.forEach((el, index) => {
  //     anime({
  //       ...GLOBAL_CFG,
  //       targets: el,
  //       opacity: [0, 1, 0],
  //       delay: index * 100,
  //       duration: index * 100,
  //       scaleX: 1.3,
  //       scaleY: 1.3,
  //       translateY: getRndInteger(-10, -40),
  //       translateX: getRndInteger(-30, 30),
  //       easing: 'linear' });
    
  //   });
    
  //   const GEAR1 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#gear1 path',
  //     rotate: 360,
  //     easing: 'linear' });
    
  //   const GEAR2 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#gear2 path',
  //     rotate: -360,
  //     easing: 'linear' });
    
  //   const SHORT_ARROW = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#shortArrow',
  //     rotate: 360,
  //     duration: 10000,
  //     easing: 'linear',
  //     transformOrigin: ['4px 25px 0', '6px 27px 0'] });
    
  //   const LONG_ARROW = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#longArrow',
  //     rotate: 360,
  //     duration: 800,
  //     easing: 'linear',
  //     transformOrigin: ['2px 32px 0', '10px 39px 0'] });
    
  //   const LEFT_HAND = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#leftHand',
  //     rotate: 6,
  //     duration: 1000,
  //     direction: 'alternate',
  //     easing: 'easeInOutQuart',
  //     transformOrigin: ['2px 32px 0', '10px 39px 0'] });
    
  //   const LEFT_PALM = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#leftPalm',
  //     translateX: -10,
  //     duration: 1000,
  //     direction: 'alternate',
  //     easing: 'easeInOutQuart',
  //     transformOrigin: ['2px 32px 0', '10px 39px 0'] });
    
  //   const RIGHT_HAND = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#rightHand',
  //     rotate: 6,
  //     duration: 500,
  //     direction: 'alternate',
  //     easing: 'easeInOutBack',
  //     transformOrigin: ['280px 120px 0', '280px 120px 0'] });
    
    
  //   const RIGHT_PALM = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#rightPalm',
  //     rotate: 6,
  //     translateX: '-15px',
  //     translateY: '-5px',
  //     duration: 500,
  //     direction: 'alternate',
  //     easing: 'easeInOutBack',
  //     transformOrigin: ['30px 30px 0', '30px 30px 0'] });
    
  //   const PEN = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#pen',
  //     rotate: 8,
  //     translateX: '-15px',
  //     translateY: '-5px',
  //     duration: 500,
  //     direction: 'alternate',
  //     easing: 'easeInOutBack',
  //     transformOrigin: ['30px 30px 0', '30px 30px 0'] });
    
  //   const MOUTH = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#mounth',
  //     rotate: 2,
  //     scaleX: 1.1,
  //     scaleY: [1.2, .9],
  //     duration: 1500,
  //     direction: 'alternate',
  //     easing: 'easeInOutElastic',
  //     transformOrigin: ['30px 30px 0', '30px 30px 0'] });
    
  //   const TONGUE = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#tongue',
  //     rotate: -5,
  //     scaleX: 1.2,
  //     scaleY: [1.1, .6],
  //     duration: 1500,
  //     direction: 'alternate',
  //     easing: 'easeInOutElastic',
  //     transformOrigin: ['30px 10px 0', '30px 10px 0'] });
    
  //   const HEAD = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#head',
  //     rotate: -5,
  //     duration: 1500,
  //     direction: 'alternate',
  //     easing: 'easeInOutSine',
  //     transformOrigin: ['200px 200px 0', '200px 200px 0'] });
    
  //   const HAIR1 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#hair1',
  //     rotate: -3,
  //     duration: 1500,
  //     direction: 'alternate',
  //     easing: 'easeInOutSine',
  //     transformOrigin: ['200px 200px 0', '200px 200px 0'] });
    
  //   const HAIR2 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#hair2',
  //     rotate: -4,
  //     duration: 1500,
  //     direction: 'alternate',
  //     easing: 'easeInOutSine',
  //     transformOrigin: ['100px 180px 0', '100px 180px 0'] });
    
  //   const BRAW = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#brows',
  //     rotate: -10,
  //     duration: 500,
  //     direction: 'alternate',
  //     easing: 'easeInOutSine' });
    
  //   const EYE1 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#leftEye',
  //     duration: 2000,
  //     scaleY: [.4],
  //     direction: 'alternate',
  //     easing: 'easeInOutSine' });
    
  //   const EYE2 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#rghtEye',
  //     duration: 2000,
  //     scaleY: [.6],
  //     direction: 'alternate',
  //     easing: 'easeInOutSine' });
    
  //   const FLASH1 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#flash1',
  //     duration: getRndInteger(400, 500),
  //     scaleY: [.6],
  //     scaleX: [.6],
  //     rotate: getRndInteger(-4, 4),
  //     opacity: [0, .7, 0],
  //     easing: 'easeInOutSine' });
    
  //   const FLASH2 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#flash2',
  //     delay: 500,
  //     duration: getRndInteger(400, 500),
  //     scaleY: [.6],
  //     scaleX: [.6],
  //     rotate: getRndInteger(-4, 4),
  //     opacity: [0, .7, 0],
  //     easing: 'easeInOutSine' });
    
  //   const FLASH3 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#whiteFlash1',
  //     duration: 1000,
  //     opacity: [0, 0, .9, .7, .7, 0],
  //     easing: 'easeOutQuint' });
    
  //   const FLASH4 = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#whiteFlash2',
  //     duration: 900,
  //     delay: 200,
  //     opacity: [0, .6, 0],
  //     easing: 'linear' });
    
  //   const PAPER = anime({
  //     ...GLOBAL_CFG,
  //     targets: '#paper1',
  //     delay: 500,
  //     duration: 3500,
  //     scaleY: [0, .6],
  //     scaleX: [0, .6],
  //     translateX: [-200, -100],
  //     translateY: [-200, -100],
  //     rotate: getRndInteger(-400, -100),
  //     opacity: [0.3, .7, 0],
  //     easing: 'easeInOutSine' });   
  // }

  animejsfunc(){
    function fitElementToParent(el:any, padding:any, exception:any) {
      var timeout:any = null;
      function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, {scale: 1});
        if (exception) anime.set(exception, {scale: 1});
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        var invertedRatio = elOffsetWidth / parentOffsetWidth;
        timeout = setTimeout(function() {
          anime.set(el, {scale: ratio});
          if (exception) anime.set(exception, {scale: invertedRatio});
        }, 10);
      }
      resize();
      window.addEventListener('resize', resize);
      }
      
      // main logo animation
      
      // var logoAnimation = (function() {
      
      //   var logoAnimationEl = document.querySelector('.logo-animation');
      //   var bouncePath = anime.path('.bounce path');
      
      //   fitElementToParent(logoAnimationEl, 0, '.bounce svg');
      
      //   anime.set(['.letter-a', '.letter-n', '.letter-i'], {translateX: 70});
      //   anime.set('.letter-e', {translateX: -70});
      //   anime.set('.dot', { translateX: 630, translateY: -200 });
      
      //   var logoAnimationTL = anime.timeline({
      //     autoplay: false,
      //     easing: 'easeOutSine'
      //   })
      //   .add({
      //     targets: '.letter-i .line',
      //     duration: 0,
      //     begin: function(a:any) { a.animatables[0].target.removeAttribute('stroke-dasharray'); }
      //   }, 0)
      //   .add({
      //     targets: '.bounced',
      //     transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
      //     translateY: [
      //       {value: [150, -160], duration: 190, endDelay: 20, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)'},
      //       {value: 4, duration: 120, easing: 'easeInQuad'},
      //       {value: 0, duration: 120, easing: 'easeOutQuad'}
      //     ],
      //     scaleX: [
      //       {value: [.25, .85], duration: 190, easing: 'easeOutQuad'},
      //       {value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine'},
      //       {value: 1, duration: 260, delay: 25, easing: 'easeOutQuad'}
      //     ],
      //     scaleY: [
      //       {value: [.3, .8], duration: 120, easing: 'easeOutSine'},
      //       {value: .35, duration: 120, delay: 180, easing: 'easeInOutSine'},
      //       {value: .57, duration: 180, delay: 25, easing: 'easeOutQuad'},
      //       {value: .5, duration: 190, delay: 15, easing: 'easeOutQuad'}
      //     ],
      //     delay: anime.stagger(80)
      //   }, 1000)
      //   .add({
      //     targets: '.dot',
      //     opacity: { value: 1, duration: 100 },
      //     translateY: 250,
      //     scaleY: [4, .7],
      //     scaleX: { value: 1.3, delay: 100, duration: 200},
      //     duration: 280,
      //     easing: 'cubicBezier(0.350, 0.560, 0.305, 1)'
      //   }, '-=290')
      //   .add({
      //     targets: '.letter-m .line',
      //     easing: 'easeOutElastic(1, .8)',
      //     duration: 600,
      //     d: function(el:any) { return el.dataset.d2 },
      //     begin: function(a:any) { a.animatables[0].target.removeAttribute('stroke-dasharray'); }
      //   }, '-=140')
      //   .add({
      //     targets: ['.letter-a', '.letter-n', '.letter-i', '.letter-e'],
      //     translateX: 0,
      //     easing: 'easeOutElastic(1, .6)',
      //     duration: 800,
      //     delay: anime.stagger(40, {from: 2.5}),
      //     change: function(a:any) { a.animatables[2].target.removeAttribute('stroke-dasharray'); }
      //   }, '-=600')
      //   .add({
      //     targets: '.letter-m .line',
      //     d: function(el:any) { return el.dataset.d3 },
      //     easing: 'spring(.2, 200, 3, 60)',
      //   }, '-=680')
      //   .add({
      //     targets: '.dot',
      //     translateX: bouncePath('x'),
      //     translateY: bouncePath('y'),
      //     rotate: {value: '1turn', duration: 790},
      //     scaleX: { value: 1, duration: 50, easing: 'easeOutSine' },
      //     scaleY: [
      //       { value: [1, 1.5], duration: 50, easing: 'easeInSine' },
      //       { value: 1, duration: 50, easing: 'easeOutExpo' }
      //     ],
      //     easing: 'cubicBezier(0, .74, 1, .255)',
      //     duration: 800
      //   }, '-=1273')
      //   .add({
      //     targets: '.dot',
      //     scale: 1,
      //     rotate: '1turn',
      //     scaleY: {value: .5, delay: 0, duration: 150},
      //     translateX: 430,
      //     translateY: [
      //       {value: 244, duration: 100},
      //       {value: 204, duration: 200, delay: 130},
      //       {value: 224, duration: 225, easing: 'easeOutQuad', delay: 25}
      //     ],
      //     duration: 200,
      //     easing: 'easeOutSine'
      //   }, '-=474')
      //   .add({
      //     targets: '.letter-i .line',
      //     transformOrigin: ['50% 100% 0', '50% 100% 0'],
      //     d: function(el:any) { return el.dataset.d2 },
      //     easing: 'cubicBezier(0.400, 0.530, 0.070, 1)',
      //     duration: 80
      //   }, '-=670')
      //   .add({
      //     targets: '.logo-letter',
      //     translateY: [
      //       {value: 40, duration: 150, easing: 'easeOutQuart'},
      //       {value: 0, duration: 800, easing: 'easeOutElastic(1, .5)'}
      //     ],
      //     strokeDashoffset: [anime.setDashoffset, 0],
      //     delay: anime.stagger(60, {from: 'center'})
      //   }, '-=670')
      //   .add({
      //     targets: '.bounced',
      //     scaleY: [
      //       {value: .4, duration: 150, easing: 'easeOutQuart'},
      //       {value: .5, duration: 800, easing: 'easeOutElastic(1, .5)'}
      //     ],
      //     delay: anime.stagger(60, {from: 'center'})
      //   }, '-=1090')
      //   .add({
      //     targets: '.logo-text',
      //     translateY: [
      //       {value: 20, easing: 'easeOutQuad', duration: 100},
      //       {value: 0, easing: 'easeOutElastic(1, .9)', duration: 450}
      //     ],
      //     opacity: {value: [0.001, 1], duration: 50},
      //     duration: 500
      //   }, '-=970')
      //   .add({
      //     targets: '.main-logo-circle',
      //     opacity: {value: [0.001, 1], duration: 1500},
      //     backgroundImage: ['linear-gradient(-135deg, #FFFFFF 50%, #F6F4F2 75%, #F6F4F2 100%, #DDDAD7 100%)', 'linear-gradient(-135deg, #FFFFFF 5%, #F6F4F2 40%, #F6F4F2 70%, #DDDAD7 100%)'],
      //     translateY: {value: ['60px', 0], easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'},
      //     duration: 2000,
      //     easing: 'easeInOutQuad'
      //   }, '-=970')
      //   .add({
      //     targets: ['.description-title','.description-paragraph'],
      //     opacity: {value: [0.001, 1], easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'},
      //     translateY: {value: ['80px', 0], easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'},
      //     duration: 3500,
      //     delay: anime.stagger(75)
      //   }, '-=1300')
      
      //   return logoAnimationTL;
      
      // })();
      
      
      // logoAnimation.play();
  }

  






}
