import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3YxMDMzLWEtMTUtYS14XzIuanBn.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );

}

const styleCard = {
    backgroundColor: "lightgray",
};
const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;

    return (
        <div className="res-card" style={styleCard}>

            <img className="res-img" alt="res-food"
                src=
                {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>

        </div>
    )
}
const resList = [
    {
        info: {
            id: "402722",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/89423a4d-88f0-40ea-8aa8-383c077b684f_402722.jpg",
            locality: "Adambakkam",
            areaName: "Adambakkam",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas"
            ],
            avgRating: 4.2,
            parentId: "721",
            avgRatingString: "4.2",
            totalRatingsString: "6.2K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 01:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Pizza.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "953"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/pizza-hut-adambakkam-rest402722",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "473029",
            name: "Chinese Wok",
            cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
            locality: "Velachery",
            areaName: "Velachery",
            costForTwo: "₹250 for two",
            cuisines: [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "61955",
            avgRatingString: "4.3",
            totalRatingsString: "3.3K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 1.3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "1.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 02:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹149"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "3.2",
                    ratingCount: "113"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/chinese-wok-velachery-rest473029",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "17818",
            name: "KFC",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/846dd0ee-4a45-44a1-a135-d5be2bb36dbe_17818.JPG",
            locality: "Vijaya Nagar",
            areaName: "Velachery",
            costForTwo: "₹400 for two",
            cuisines: [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            avgRating: 4.2,
            parentId: "547",
            avgRatingString: "4.2",
            totalRatingsString: "32K+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 2.5,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "2.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 03:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Burger.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹89"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/kfc-vijaya-nagar-velachery-rest17818",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "110529",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
            locality: "Seetaram Nagar",
            areaName: "Velachery",
            costForTwo: "₹200 for two",
            cuisines: [
                "Waffle",
                "Desserts",
                "Ice Cream"
            ],
            avgRating: 4.7,
            veg: true,
            parentId: "2233",
            avgRatingString: "4.7",
            totalRatingsString: "8.1K+",
            sla: {
                deliveryTime: 38,
                lastMileTravel: 3.6,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "3.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/the-belgian-waffle-co-seetaram-nagar-velachery-rest110529",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "182312",
            name: "Domino's Pizza",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/282c9190-c30b-436d-99b6-8202bbe456dc_182312.jpg",
            locality: "ADAMBAKKAM CHENNAI TAMIL NADU",
            areaName: "Madipakkam",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "2456",
            avgRatingString: "4.3",
            totalRatingsString: "9.2K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Pizza.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹1199",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/dominos-pizza-adambakkam-tamil-nadu-madipakkam-rest182312",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "48501",
            name: "Subway",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0d842634-c1a0-4c4b-b90b-78c96f8081af_48501.JPG",
            locality: "Velachery",
            areaName: "100 Feet Bypass Road",
            costForTwo: "₹350 for two",
            cuisines: [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            avgRating: 4.4,
            parentId: "2",
            avgRatingString: "4.4",
            totalRatingsString: "26K+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 05:50:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Sandwiches.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/subway-velachery-100-feet-bypass-road-rest48501",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "249766",
            name: "Baskin Robbins - Ice Cream Desserts",
            cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
            locality: "12 th Avenue, Ashok Nagar",
            areaName: "Ashok Nagar",
            costForTwo: "₹250 for two",
            cuisines: [
                "Desserts"
            ],
            avgRating: 4.6,
            veg: true,
            parentId: "5588",
            avgRatingString: "4.6",
            totalRatingsString: "1.4K+",
            sla: {
                deliveryTime: 38,
                lastMileTravel: 6.9,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "6.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/baskin-robbins-ice-cream-desserts-12-th-avenue-ashok-nagar-rest249766",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "500438",
            name: "Home Plate by EatFit",
            cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
            locality: "Pillaiyar Koil Street",
            areaName: "Velachery",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "Home Food",
                "Healthy Food",
                "Indian",
                "Punjabi",
                "South Indian",
                "Rajasthani",
                "Maharashtrian",
                "Snacks",
                "Desserts"
            ],
            avgRating: 4.2,
            parentId: "301197",
            avgRatingString: "4.2",
            totalRatingsString: "1.0K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 01:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                        description: "bolt!"
                    }
                ],
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/home-plate-by-eatfit-pillaiyar-koil-street-velachery-rest500438",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "6448",
            name: "A2B - Adyar Ananda Bhavan",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/85542b62-ca6d-4bb0-b626-f4eda39ec1a3_6448.jpg",
            locality: "Vijayanagar",
            areaName: "Velachery",
            costForTwo: "₹300 for two",
            cuisines: [
                "South Indian",
                "Sweets",
                "Chinese"
            ],
            avgRating: 4.5,
            veg: true,
            parentId: "22",
            avgRatingString: "4.5",
            totalRatingsString: "76K+",
            sla: {
                deliveryTime: 27,
                lastMileTravel: 3.7,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 22:30:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹349",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-vijayanagar-velachery-rest6448",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "23724",
            name: "McDonald's",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/b23e3b39-5078-4b1c-a5a2-31a113d6f23e_23724.jpg",
            locality: "Velachery",
            areaName: "Velachery",
            costForTwo: "₹400 for two",
            cuisines: [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            avgRating: 4.4,
            parentId: "630",
            avgRatingString: "4.4",
            totalRatingsString: "62K+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 3.7,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-Burger.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹549",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.2",
                    ratingCount: "7.4K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/mcdonalds-velachery-rest23724",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "698670",
            name: "WeFit - Protein Bowls, Salads & Sandwiches",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/d54bb92c-05e4-4416-93d7-ce7891e53521_698670.JPG",
            locality: "Medavakkam Main Road",
            areaName: "Adambakkam",
            costForTwo: "₹250 for two",
            cuisines: [
                "Healthy Food",
                "Salads",
                "Keto",
                "Snacks"
            ],
            avgRating: 4.6,
            parentId: "355285",
            avgRatingString: "4.6",
            totalRatingsString: "817",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 1.6,
                serviceability: "SERVICEABLE",
                slaString: "20-30 mins",
                lastMileTravelString: "1.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 02:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "brand",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "brand"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/wefit-protein-bowls-salads-and-sandwiches-medavakkam-main-road-adambakkam-rest698670",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "750439",
            name: "Daily Kitchen - Homely Meals",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/8a1d8aae-63c3-4033-a8b4-5d0eac490c8f_750439.JPG",
            locality: "Adambakkam",
            areaName: "Nanganallur",
            costForTwo: "₹250 for two",
            cuisines: [
                "Home Food",
                "Indian",
                "North Indian",
                "Thalis"
            ],
            avgRating: 4.5,
            parentId: "444382",
            avgRatingString: "4.5",
            totalRatingsString: "461",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 1.6,
                serviceability: "SERVICEABLE",
                slaString: "20-30 mins",
                lastMileTravelString: "1.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 02:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/daily-kitchen-homely-meals-adambakkam-nanganallur-rest750439",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "470708",
            name: "Big Bowl",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_470708.JPG",
            locality: "Near Gangai Nagar",
            areaName: "Velachery",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "Chinese",
                "Tibetan",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "434792",
            avgRatingString: "4.3",
            totalRatingsString: "2.1K+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 1.3,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 02:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹149"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/big-bowl-near-gangai-nagar-velachery-rest470708",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "614543",
            name: "NH1 Bowls - Highway To North",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/2ac6fe5e-4505-4911-a013-a369b4b2fa39_614543.jpg",
            locality: "Adambakkam",
            areaName: "Madipakkam",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            avgRating: 4.6,
            parentId: "22452",
            avgRatingString: "4.6",
            totalRatingsString: "731",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 1.6,
                serviceability: "SERVICEABLE",
                slaString: "20-30 mins",
                lastMileTravelString: "1.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 02:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/nh1-bowls-highway-to-north-adambakkam-madipakkam-rest614543",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "14670",
            name: "Salem RR Biriyani Unavagam",
            cloudinaryImageId: "3daa979cd6892a3bcdf2f0ecea2b2d98",
            locality: "Velachery",
            areaName: "Velachery",
            costForTwo: "₹400 for two",
            cuisines: [
                "Biryani",
                "Chettinad",
                "Tandoor",
                "Chinese"
            ],
            avgRating: 4.2,
            parentId: "176137",
            avgRatingString: "4.2",
            totalRatingsString: "32K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2.5,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "3.6",
                    ratingCount: "2.4K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/salem-rr-biriyani-unavagam-velachery-rest14670",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "812474",
            name: "Meen Satti",
            cloudinaryImageId: "e7806b9ebb9700fb09d8d87c3774c9b9",
            locality: "Ganapathy Nagar",
            areaName: "Velachery",
            costForTwo: "₹800 for two",
            cuisines: [
                "Seafood",
                "South Indian",
                "Biryani",
                "Thalis",
                "Chettinad"
            ],
            avgRating: 4,
            parentId: "267701",
            avgRatingString: "4.0",
            totalRatingsString: "492",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "newg.png",
                        description: "Gourmet"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹249"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/meen-satti-ganapathy-nagar-velachery-rest812474",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "15743",
            name: "Sangeetha Veg Restaurant",
            cloudinaryImageId: "bhq3cgee5sjz9xxw5cks",
            locality: "Guindy",
            areaName: "Guindy",
            costForTwo: "₹200 for two",
            cuisines: [
                "North Indian",
                "Chinese",
                "South Indian"
            ],
            avgRating: 4.7,
            parentId: "1260",
            avgRatingString: "4.7",
            totalRatingsString: "38K+",
            sla: {
                deliveryTime: 27,
                lastMileTravel: 3.9,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "3.9",
                    ratingCount: "9.7K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/sangeetha-veg-restaurant-guindy-rest15743",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "639426",
            name: "Dum Safar Biryani",
            cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
            locality: "Dr. Seetharam Nagar Main Road",
            areaName: "VELACHERY",
            costForTwo: "₹500 for two",
            cuisines: [
                "Biryani",
                "Kebabs",
                "Tandoor",
                "Indian",
                "Desserts"
            ],
            avgRating: 3.8,
            parentId: "351013",
            avgRatingString: "3.8",
            totalRatingsString: "265",
            sla: {
                deliveryTime: 33,
                lastMileTravel: 3.7,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "3.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-18 23:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹399",
                discountTag: "FLAT DEAL"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/dum-safar-biryani-dr-seetharam-nagar-main-road-velachery-rest639426",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "681656",
            name: "LeanCrust Pizza- ThinCrust Experts",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/05bff6aa-e53f-4795-b04e-53b75c1fd930_681656.jpg",
            locality: "Adambakkam",
            areaName: "Madipakkam",
            costForTwo: "₹300 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Desserts"
            ],
            avgRating: 4.5,
            parentId: "11216",
            avgRatingString: "4.5",
            totalRatingsString: "646",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 1.6,
                serviceability: "SERVICEABLE",
                slaString: "20-30 mins",
                lastMileTravelString: "1.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 02:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/leancrust-pizza-thincrust-experts-adambakkam-madipakkam-rest681656",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "679913",
            name: "MOJO Pizza - 2X Toppings",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/4b9e1e72-9e09-4392-be4c-6f43bdbc5b23_679913.jpg",
            locality: "Adambakkam",
            areaName: "Madipakkam",
            costForTwo: "₹250 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            avgRating: 4.6,
            parentId: "11329",
            avgRatingString: "4.6",
            totalRatingsString: "869",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 1.6,
                serviceability: "SERVICEABLE",
                slaString: "20-30 mins",
                lastMileTravelString: "1.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-12-19 02:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
            context: "seo-data-c07064ff-b015-463b-a453-f5d5b79f4956"
        },
        cta: {
            link: "https://www.swiggy.com/city/chennai/mojo-pizza-2x-toppings-adambakkam-madipakkam-rest679913",
            type: "WEBLINK"
        }
    }
]
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/**Resto card Component */}
                {resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))}
            </div>
        </div>
    )

}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)