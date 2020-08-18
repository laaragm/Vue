<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <!-- Transition is a vue js component which we can use to animate anything
                which is between the opening and closing tag. Be careful because we may
                only use it for one element. -->
                <!-- Let's say we want a fade in animation, therefore we add the name
                attribute here. No colon at the beginning because we don't want to
                dynamically bind this to some property, we want to hardcode the name
                into here as a string -->
                <!-- <transition name="fade">  -->
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <!-- If you mix animation and transition (css) make sure to set up
                which one dictates the length -->
                <!-- We can tell vue js which duration of which property to use by
                adding a type property here(and then set it to animation or to transition) -->
                <!-- You can add the appear attribute to the transition component. By
                doing so you'll see that when the page is reloaded the elements are 
                also animated -->
                <transition name="slide" type="animation" appear>  
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                >  
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <!-- Transition between multiple elements -->
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>

                <hr>
                <button class="brn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br><br>
                <!-- JavaScript Animations (note that you can mix js and css animations) -->
                <transition 
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"> <!-- Don't look for css classes because we're not using them -->
                        <div 
                            style="width: 300px; height: 100px; background-color:lightgreen"
                            v-if="load">
                        </div>
                </transition>

                <hr>
                <button 
                    class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
                >
                    Toogle Components
                </button>
                <br><br>
                <!-- Here there are multiple dynamic components and this is possible
                because we're making sure that only one is loaded at a time -->
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>

                <hr>
                <!-- Using <transition-group> to animate items of a list -->
                <button class="btn btn-primary" @click="addItem">Add item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                            class="list-group-item"
                            v-for="(number, index) in numbers"
                            @click="removeItem(index)"
                            style="cursor: pointer"
                            :key="number"
                        >
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue'
    import SuccessAlert from './SuccessAlert.vue'

    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            //These are the hooks which get executed 
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) { 
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
        components: {
            appDangerAlert: DangerAlert, //app-danger-alert
            appSuccessAlert: SuccessAlert //app-success-alert
        }
    }
</script>

<style>
    /*This is the fade transition we specified above*/
    .fade-enter{ /*Initial state. This class will be removed after one frame*/
        opacity: 0;
    }

    .fade-enter-active{ /*This is the class where we can add our transitions*/
        transition: opacity 1s;
    }

    .fade-leave{
        /* opacity: 1; */
    }

    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter{ 
        opacity: 0;
        /* transform: translateY(20px); */
    }

    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave{

    }

    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move{
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }

</style>
