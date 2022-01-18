module.exports = {
    purge: [],
    // purge: {
    //   enabled: true,
    //   content: ['./src/**/*.html'],
    // },
    // mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily:{
          'noto':['Noto Sans','ui-sans-serif', 'system-ui'],
        },
        keyframes: {
          wiggle: {
            '0%': { height: '0px' },
            '100%': { height: '300px' },
          },
          wiggle1: {
            '0%': { height: '300px' },
            '100%': { height: '0px' },
          }
        },
        animation: {
          wiggle: 'wiggle 2s ease-in-out',
          wiggle1: 'wiggle1 2s ease-in-out',
         },
        colors:{
          'primary':'#333449',
          'pri1':'#42436E',
          'pri2':'rgba(0, 0, 0, 0.07)',
          'secondary':'#464775',
          'secondary1':'#61C5E7',
          'secondary2':'#4C4D80',
          'secondary3':'#565790',
          'secondary4':'#3D3E66',
          'secondary5':'#363659',
          'secondary6':'#E4E4E9',
          'secondary7':'#2C2D49',
          'secondary8':'rgba(0, 0, 0, 0.07);',
          'secondary9':'#5B5B86',
          'pricol1': '#B5B5C8',
          'white':'#fff',
          'black':'#000',
          'black1':'#212121',
          'black2':'#393939',
          'grey':'#DDDDDD',
          'green1':'#7DC242',
          'yellow':'#FEDF60',
          'greylight':'#F5F5F4',
          'greenlight':'#7EC243',
          'greylight1':'#AAADA8',
          'greylight2':'#8F8F8F',
          'greylight3':'#CCCCCC',
          'greylight4':'#8b8b95',
          'input1':'rgba(0, 0, 0, 0.1)',
          'input11':'#8A8AA8',
          'input2':'rgba(0, 0, 0, 0.3)',
          'input22':'#A7A7BE',
        },
        width:{
          '633':'633px',
          '537':'537px',
          '500':'500px',
          '480':'480px',
          '450':'450px',
          '400':'400px',
          '350':'350px',
          '328':'328px',
          '316':'316px',
          '300':'300px',
          '250':'250px',
          '240':'240px',
          '120':'120px',
          '191':'191px',
          '131':'131px',
          '118':'118px',
          '80':'80px',
          '76':'76px',
          '60':'60px',
          '48':'48px',
          '44':'44px',
          '40':'40px',
          '28':'28px',
          '24':'24px',
          '21':'21px',
          '20':'20px',
          '18':'18px',
        },
        height:{
          '633':'633px',
          '619':'619px',
          '500':'500px',
          '356':'356px',
          '350':'350px',
          '344':'344px',
          '300':'300px',
          '280':'280px',
          '244':'244px',
          '160':'160px',
          '152':'152px',
          '150':'150px',
          '88':'88px',
          '83':'83px',
          '72':'72px',
          '68':'68px',
          '60':'60px',
          '48':'48px',
          '44':'44px',
          '39':'39px',
          '36':'36px',
          '32':'32px',
          '28':'28px',
          '24':'24px',
          '20':'20px',
          '18':'18px',
          '15':'15px',
          '14':'14px',
          '12':'12px',
          'fit':'fit-content'
        },
        maxHeight:{
          '633':'633px',
          '619':'619px',
          '560':'560px',
          '500':'500px',
          '356':'356px',
          '350':'350px',
          '344':'344px',
          '300':'300px',
          '280':'280px',
          '244':'244px',
          '160':'160px',
          '152':'152px',
          '150':'150px',
          '148':'148px',
          '88':'88px',
          '83':'83px',
          '72':'72px',
          '68':'68px',
          '60':'60px',
          '48':'48px',
          '44':'44px',
          '39':'39px',
          '36':'36px',
          '32':'32px',
          '24':'24px',
          '20':'20px',
          '18':'18px',
          '15':'15px',
          '14':'14px',
          '12':'12px',
          'fit':'fit-content'
        },
        fontSize:{
          '62':['62px',{lineHeight:'72px'}],
          '56':['56px',{lineHeight:'72px'}],
          '42':['42px',{lineHeight:'52px'}],
          '40':['40px',{lineHeight:'52px'}],
          '32':['32px',{lineHeight:'46px'}],
          '30':['30px',{lineHeight:'46px'}],
          '26':['26px',{lineHeight:'36px'}],
          '24':['24px',{lineHeight:'33px'}],
          '18':['18px',{lineHeight:'28px'}],
          '181':['18px',{lineHeight:'21.3px'}],
          '16':['16px',{lineHeight:'24px'}],
          '16_28':['16px',{lineHeight:'28px'}],
          '15':['15px',{lineHeight:'24px'}],
          '14':['14px',{lineHeight:'20px'}],
          '13':['13px',{lineHeight:'16px'}],
          '12_20':['12px',{lineHeight:'20px'}],
          '12':['12px',{lineHeight:'16px'}],
          '11':['11px',{lineHeight:'15px'}],
          '9':['9px',{lineHeight:'12px'}],
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
    variants: {
      extend: {
        display: ['group-hover','group-focus'],
        visibility: ['group-hover'],
        scrollbar: ['rounded'],
        fill: ['hover', 'focus'],
        stroke: ['hover', 'focus'],
      },
    },
    
  }
  