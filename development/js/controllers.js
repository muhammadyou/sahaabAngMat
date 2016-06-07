angular.module("MyControllers", [])

    .controller("HomeCtrl", function(SideMenuData, $state, $stateParams,  $location, $anchorScroll, AchievData, carouselSlides, IntelBarData) {

        this.sideMenuUrl = SideMenuData.get();

        this.gotoState = function(state, param){
            if(param)
                $state.go('main.home', {scrollTo:param})  // if param is passed which means a section on homepage is requested, so go to that state
            else{
                param = null;
                $state.go(state, {scrollTo: param});   // if no param then without any param
            }
        }

        /*----------------------------------------------Carousel ---------------------------------------------------------*/
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        this.slides  = []
        this.slides= carouselSlides;
        var currIndex = 0;

        this.gotoRoute = function(obj){
            if(obj.route != "projects")
                $state.go(obj.route);
            else{
                $location.hash('projects')
                $anchorScroll();
            }

        }


        // Its not currently used, before i had links in the side menu which refer to the section on the same page
        //----------------------------Based on Param setting the window location after sidenav link clicked --------------------------//
        if($stateParams.scrollTo){   // check if stateparams is set
            $location.hash($stateParams.scrollTo);   // then scroll to that parameter passed which is the id of that content
            $anchorScroll();
        }

        //---------------------------------Achievement Images --------------------------------------------------------------------//






    })

