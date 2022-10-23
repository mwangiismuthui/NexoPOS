/**
 * will bootstrap time
 */
import './shared/time';
import * as baseComponents from './components/components';
import { NsHotPress } from './libraries/ns-hotpress';
import { createApp, defineAsyncComponent } from 'vue';

( window as any ).nsComponents  =   { ...baseComponents };
( window as any ).nsHotPress    =   new NsHotPress;

const posApp    =   createApp({
    mounted() {
        // ...
    },
});

posApp.component( 'nsPos', defineAsyncComponent( () => import( '~/pages/dashboard/pos/ns-pos.vue' ) ) );
posApp.component( 'nsPosCart', defineAsyncComponent( () => import( '~/pages/dashboard/pos/ns-pos-cart.vue' ) ) );
posApp.component( 'nsPosGrid', defineAsyncComponent( () => import( '~/pages/dashboard/pos/ns-pos-grid.vue' ) ) );

for( let name in baseComponents ) {
    posApp.component( name, baseComponents[ name ] );
}

posApp.mount( '#pos-app' );