angular.module("MyServices", [])

    .factory("SideMenuData", function() {

        var data =[
            {"heading": "Home", "state": "main.home", "id": null},
            {"heading": "Executive Message", "state": "main.executivesMessage", "id": null},
            {"heading": "Updates", "state": "main.updates", id:null},
            {"heading":"Sahaab Program", "state": "main.program", "id": null},
            {"heading": "Emerging Technologies", "state": "main.emergingTech", "id": null}
        ]


        return {
            get: function(){
                return data;
            }
        }


    })

    .factory("Carousel", function($q, $http) {

        var objBag = {};
        objBag.slides = function() {
            var defer = $q.defer();
            $http.get("data/slidesData.json").success(function(response){
                defer.resolve(response);
            }).error(function(error){
                alert(JSON.stringify(error));
            })
            return defer.promise;

        };

        return objBag;


    })

    .factory("IntelBar", function($q, $http) {

        var objBag = {};
        objBag.data = function() {
            var defer = $q.defer();
            $http.get("data/IntelBarData.json").success(function(response){
                defer.resolve(response);
            }).error(function(error){
                alert(JSON.stringify(error));
            })
            return defer.promise;

        };

        return objBag;


    })


    .factory("AchievData", function() {

        var data = [
            {"image": 'img/SuccessStory.png', "description": "", "title": "Success Story"},
            {"image": 'img/MarketPos.png', "description": "", "title": "Etisalat Market Position"},
            {"image": 'img/FixedLTE.png', "description": "", "title": "First Fixed LTE"}
        ]

        var imgIndex = function(selectedImage){   // Achievement images index
            var index = 1;

            for(var i =0; i<data.length; i++){  // go over the array and find the index of that object
                if(data[i].image == selectedImage){
                    var object = data[i];
                    index = data.indexOf(object)
                }
            }
            return index;
        }

        var nextImage = function(selectedImage){

            var index = imgIndex(selectedImage);
            if(index < 2){  // there are total three images starting from 0 to 2
                index = index +1;              // increment the index
                return data[index].image;  // use that index to show next image
            }


        }

        var prevImage = function(selectedImage){

            var index = imgIndex(selectedImage);
            if(index > 0){
                index = index -1;              // increment the index
                return data[index].image;  // use that index to show next image
            }
        }


        return {
            get: function(){
                return data;
            },

            getNextImage : function(selectedImage){
                return nextImage(selectedImage)
            },

            getPrevImage: function(selectedImage){
                return prevImage(selectedImage)
            }
        }


    })


    .factory("UpdatesData", function() {
        var newsData = [
            {"image": 'img/newsIntel.png', "description": "", "title": "Etisalat Intel Partnership"},
            {"image": 'img/newsNFVI.png', "description": "", "title": "First NFVI"},
            {"image": 'img/newsvEPC.png', "description": "", "title": "First Cloudified Service"}
        ]


        var blogData = [
            {
                "image": "img/alkaaf.jpg",
                "name": "Ali Alkaff",
                "title": "Enabling the Digital Transformation",
                "position": "Senior Director",
                "dept": "Emerging Technologies",
                "role": "Sahaab Program Lead",
                "date": "3 April 2015",
                "content" : [
                    {"para": "One thing is for sure— We should be grateful that Etisalat UAE is filled with caring, progressive and future-seeking people, both in the leadership team and in our midst. This critical mass of minds and intentions have no choice but to coalesce for something good, something lasting, something empowering."},
                    {"para": "And that's probably the best value I could attribute to NFV and SDN: Empowering Etisalat to lead in its digital transformation in the new age. It has been all hard work and late night collaborations in the last two years. And it was worth it. We're well on our way to launch the first NFV Infrastructure (NFVI) in Etisalat, a telecom cloud powered by Internet-age open software and hardware, to unlock our future agility. The first virtualised services on top of the NFVI shall be those of the EPC, e.g. vPGW, vSGW and vMME. Next, together with the CPE team, Business Marketing and Consumer Marketing, we aim to cloudify the CPE for businesses and homes, respectively. As a golden rule, customer-centric service orchestration shall be at the heart of all these projects."},
                    {"para": "As and when services become ripe for cloudification, the NFVI will need to expand from the current 5 sites to the rest of the network, enabling a software-defined fluid infrastructure fit for our transformation to the digital age. What needs to be distributed, can be. And this will strongly be driven by IoT, 5G and the increasing data traffic. Nonetheless, the expansion will take time and will entail huge efforts and a myriad of challenges, and no single team in any telecom can go at it alone. That's why it's a corporate program, and not just an engineering function. Our digital transformation may be about technologies, but it begins and ends with you. And in the coming months, we can't wait to tell you how."},
                    {"para": "As and when services become ripe for cloudification, the NFVI will need to expand from the current 5 sites to the rest of the network, enabling a software-defined fluid infrastructure fit for our transformation to the digital age. What needs to be distributed, can be. And this will strongly be driven by IoT, 5G and the increasing data traffic. Nonetheless, the expansion will take time and will entail huge efforts and a myriad of challenges, and no single team in any telecom can go at it alone. That's why it's a corporate program, and not just an engineering function. Our digital transformation may be about technologies, but it begins and ends with you. And in the coming months, we can't wait to tell you how."},
                    {"para": "Welcome aboard,"}
                ]
            }
        ]


        return {
            getNews: function() {
                return newsData;
            },

            getBlog: function(){
                return blogData;
            }
        }


    })



