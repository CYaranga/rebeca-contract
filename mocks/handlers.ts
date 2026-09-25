// GENERADO por scripts/gen-mocks.mjs desde openapi.yaml. No editar a mano.
import { http, HttpResponse } from "msw";

export const handlers = [
  // register_Add
  http.post("*/admins/add", () => HttpResponse.json({})),
  // adminLogin
  http.post("*/user/login", () => HttpResponse.json({})),
  // editAdmin
  http.post("*/admins/edit", () => HttpResponse.json({})),
  // deleteAdminsByID
  http.post("*/admins/delete", () => HttpResponse.json({})),
  // getMyAdmins
  http.post("*/admins/get/filter", () => HttpResponse.json({})),
  // getAdminEditableDetails
  http.post("*/admins/get/editable", () => HttpResponse.json({})),
  // updateAdminStatus
  http.post("*/admins/update/status", () => HttpResponse.json({})),
  // getGeneratedStory
  http.post("*/ia/gen/story", () => HttpResponse.json({})),
  // getImageGen
  http.post("*/ia/gen/image", () => HttpResponse.json({})),
  // generateEmbeddings
  http.post("*/ia/gen/embeddings", () => HttpResponse.json({})),
  // consultEmbeddings
  http.get("*/ia/gen/embeddings", () => HttpResponse.json({})),
  // extractActivityDetailsFromImage
  http.get("*/ia/analyze/image/activity", () => HttpResponse.json({})),
  // register_Add2
  http.post("*/clients/add", () => HttpResponse.json({})),
  // clientLogin
  http.post("*/clients/login", () => HttpResponse.json({})),
  // addClientPreferences
  http.post("*/clients/preferences/add", () => HttpResponse.json({})),
  // getClientsByFilter
  http.post("*/clients/get/filter", () => HttpResponse.json({})),
  // deleteUsersByEmail
  http.post("*/clients/delete/email", () => HttpResponse.json({})),
  // deleteAccount
  http.post("*/clients/delete/account", () => HttpResponse.json({})),
  // checkEmailAvailable
  http.post("*/clients/check", () => HttpResponse.json({})),
  // updateClient
  http.post("*/clients/update", () => HttpResponse.json({})),
  // askWatsonAssistant
  http.post("*/watson/assistant/askV2", () => HttpResponse.json({})),
  // askAgentAssistant
  http.post("*/assistant/askV3", () => HttpResponse.json({})),
  // partnerClassify
  http.post("*/assistant/partner-classify", () => HttpResponse.json({})),
  // partnerStatus
  http.get("*/assistant/partner-status", () => HttpResponse.json({})),
  // verifyWhatsAppAssistant
  http.get("*/whatsapp/assistant", () => HttpResponse.json({})),
  // askWhatsAppAssistant
  http.post("*/whatsapp/assistant", () => HttpResponse.json({})),
  // logUserBehaviour
  http.post("*/clients/behaviour/log", () => HttpResponse.json({})),
  // updateClientStatus
  http.put("*/client/status", () => HttpResponse.json({})),
  // setFavouritePOI
  http.post("*/client/favourite/poi", () => HttpResponse.json({})),
  // toggleConnection
  http.post("*/client/connection", () => HttpResponse.json({})),
  // getConnections
  http.get("*/client/connections", () => HttpResponse.json({})),
  // getLodging
  http.get("*/connect/lodging", () => HttpResponse.json({})),
  // getPackages
  http.get("*/connect/packages", () => HttpResponse.json({})),
  // getPackageDetails
  http.get("*/package/details", () => HttpResponse.json({})),
  // getStopByQr
  http.get("*/package/stop", () => HttpResponse.json({})),
  // listPackages
  http.get("*/packages", () => HttpResponse.json({})),
  // getPackageForAdmin
  http.get("*/package", () => HttpResponse.json({})),
  // createPackage
  http.post("*/package", () => HttpResponse.json({})),
  // updatePackage
  http.put("*/package", () => HttpResponse.json({})),
  // deletePackage
  http.delete("*/package", () => HttpResponse.json({})),
  // uploadPackageImage
  http.post("*/package/image", () => HttpResponse.json({})),
  // retranslatePackageField
  http.post("*/package/translate", () => HttpResponse.json({})),
  // listPackageCodes
  http.get("*/package/codes", () => HttpResponse.json({})),
  // createPackageCode
  http.post("*/package/code", () => HttpResponse.json({})),
  // updatePackageCode
  http.put("*/package/code", () => HttpResponse.json({})),
  // deletePackageCode
  http.delete("*/package/code", () => HttpResponse.json({})),
  // listProviderCodes
  http.get("*/provider/codes", () => HttpResponse.json({})),
  // createProviderCode
  http.post("*/provider/code", () => HttpResponse.json({})),
  // updateProviderCode
  http.put("*/provider/code", () => HttpResponse.json({})),
  // deleteProviderCode
  http.delete("*/provider/code", () => HttpResponse.json({})),
  // redeemProviderCode
  http.post("*/provider/code/redeem", () => HttpResponse.json({})),
  // redeemPackageCode
  http.post("*/package/redeem", () => HttpResponse.json({})),
  // peekCode
  http.post("*/package/code/peek", () => HttpResponse.json({})),
  // getProviderDetail
  http.get("*/provider/detail", () => HttpResponse.json({})),
  // clientPermissions
  http.get("*/client/permissions", () => HttpResponse.json({})),
  // get360Profile
  http.get("*/client/profile/360", () => HttpResponse.json({})),
  // get360ProfileFoundry
  http.get("*/client/profile/360/foundry", () => HttpResponse.json({})),
  // claimGenericCode_Claim
  http.post("*/trip/accommodation/code/claim", () => HttpResponse.json({})),
  // sendAppEnableCodes
  http.post("*/app/enable/code/gen", () => HttpResponse.json({})),
  // generateCollaboratorCode
  http.post("*/code/invitation/collaborator", () => HttpResponse.json({})),
  // getAccommodationCodes
  http.get("*/codes/accommodation", () => HttpResponse.json({})),
  // updateAccommodationCode
  http.put("*/codes/accommodation", () => HttpResponse.json({})),
  // updateActivationCode
  http.put("*/code/accommodation", () => HttpResponse.json({})),
  // deleteCodesByID
  http.delete("*/codes", () => HttpResponse.json({})),
  // resendCodeByEmail
  http.post("*/code/resend", () => HttpResponse.json({})),
  // claimGenericCode_Claim2
  http.post("*/code/claim", () => HttpResponse.json({})),
  // generateCheckInQR
  http.get("*/code/qr/check-in", () => HttpResponse.json({})),
  // getClientPendingCodes
  http.get("*/client/codes", () => HttpResponse.json({})),
  // validateAccessCode
  http.post("*/access-code/validate", () => HttpResponse.json({})),
  // getAccessCodes
  http.get("*/access-codes", () => HttpResponse.json({})),
  // createAccessCode
  http.post("*/access-codes", () => HttpResponse.json({})),
  // updateAccessCode
  http.put("*/access-codes", () => HttpResponse.json({})),
  // deleteAccessCodes
  http.delete("*/access-codes", () => HttpResponse.json({})),
  // getDestination
  http.get("*/destination", () => HttpResponse.json({})),
  // upsertDestination
  http.put("*/destination", () => HttpResponse.json({})),
  // getDestinations
  http.get("*/destinations", () => HttpResponse.json({})),
  // getUserLevels
  http.get("*/client/engagement/levels", () => HttpResponse.json({})),
  // getUserBadges
  http.get("*/client/engagement/badges", () => HttpResponse.json({})),
  // getUserRewards
  http.get("*/client/engagement/rewards", () => HttpResponse.json({})),
  // registerUserEngagementAction
  http.post("*/client/engagement", () => HttpResponse.json({})),
  // getCountryCallingCodes
  http.get("*/callingCodes", () => HttpResponse.json({})),
  // getCountryCodes
  http.get("*/flights/countries", () => HttpResponse.json({})),
  // getAIATACityCodes
  http.get("*/flights/airports", () => HttpResponse.json({})),
  // getAvailableFlights
  http.get("*/flights/offers", () => HttpResponse.json({})),
  // validateFlightOffer
  http.post("*/flights/offer/validate", () => HttpResponse.json({})),
  // createFlightBooking
  http.post("*/flights/offer/book", () => HttpResponse.json({})),
  // getFlightRegulations
  http.get("*/flights/regulations", () => HttpResponse.json({})),
  // createWidgetSession
  http.post("*/widget/session", () => HttpResponse.json({})),
  // geocodeForWidget
  http.post("*/widget/geocode", () => HttpResponse.json({})),
  // planStatusForWidget
  http.get("*/widget/plan-status/:task_id", () => HttpResponse.json({})),
  // webhookSalesbot_Webhooksalesbot
  http.post("*/webhook_salesbot", () => HttpResponse.json({})),
  // widgetAuth
  http.get("*/widget_auth/:provider_token", () => HttpResponse.json({})),
  // webhookSalesbot_Webhooksalesbotprobe
  http.post("*/webhook_salesbot_probe", () => HttpResponse.json({})),
  // handleWebhook
  http.post("*/webhook/:platform/chat", () => HttpResponse.json({})),
  // updateAppLabelsVersion
  http.get("*/resources/labels/update", () => HttpResponse.json({})),
  // checkForNewVersions
  http.get("*/resources/labels/consult", () => HttpResponse.json({})),
  // getAppLocalizedLabels
  http.post("*/labels/app/localize", () => HttpResponse.json({})),
  // getLocalizedWebLabelsByGroup
  http.post("*/labels/web/localize", () => HttpResponse.json({})),
  // setClientConfig
  http.post("*/clients/config/set", () => HttpResponse.json({})),
  // sendNotificationToAll
  http.post("*/service/accommodation/notification/all", () => HttpResponse.json({})),
  // sendNotificationUser2Accommodation
  http.post("*/notification/user2accommodation", () => HttpResponse.json({})),
  // unsubscribeSpecificNotification
  http.post("*/clients/notification/unsubscribe", () => HttpResponse.json({})),
  // getClientNotificationHistory
  http.post("*/clients/notification/history", () => HttpResponse.json({})),
  // markNotificationAsViewed
  http.post("*/clients/notification/mark-viewed", () => HttpResponse.json({})),
  // getProviderNotifications
  http.get("*/provider/notifications", () => HttpResponse.json({})),
  // setProviderNotificationAsViewed
  http.put("*/provider/notification/mark-viewed", () => HttpResponse.json({})),
  // overview
  http.get("*/octorate/chat/overview", () => HttpResponse.json({})),
  // filters
  http.get("*/octorate/chat/filters", () => HttpResponse.json({})),
  // thread
  http.get("*/octorate/chat/thread/:property/:thread", () => HttpResponse.json({})),
  // stream
  http.get("*/octorate/chat/stream", () => HttpResponse.json({})),
  // subscribe
  http.get("*/octorate/chat/subscribe", () => HttpResponse.json({})),
  // subscriptions
  http.get("*/octorate/chat/subscriptions", () => HttpResponse.json({})),
  // runBackfillHandler
  http.get("*/octorate/chat/backfill", () => HttpResponse.json({})),
  // runReservationsBackfillHandler
  http.get("*/octorate/chat/backfill-reservations", () => HttpResponse.json({})),
  // runGuestsBackfillHandler
  http.get("*/octorate/chat/backfill-guests", () => HttpResponse.json({})),
  // analyticsHandler
  http.get("*/octorate/analytics", () => HttpResponse.json({})),
  // coverageHandler
  http.get("*/octorate/coverage", () => HttpResponse.json({})),
  // reservationWebhook
  http.post("*/webhook/octorate/reservation", () => HttpResponse.json({})),
  // topicsReport
  http.get("*/analytics/topics", () => HttpResponse.json({})),
  // topicQuestionsHandler
  http.get("*/topics/questions", () => HttpResponse.json({})),
  // topicDemographicsHandler
  http.get("*/topics/demographics", () => HttpResponse.json({})),
  // runTaggingHandler
  http.get("*/topics/tag", () => HttpResponse.json({})),
  // mineOtroHandler
  http.get("*/topics/mine-otro", () => HttpResponse.json({})),
  // taxonomyHandler
  http.get("*/topics/taxonomy", () => HttpResponse.json({})),
  // addTaxonomyHandler
  http.get("*/topics/taxonomy/add", () => HttpResponse.json({})),
  // proposalsHandler
  http.get("*/topics/proposals", () => HttpResponse.json({})),
  // getRooms
  http.get("*/octorate/rooms", () => HttpResponse.json({})),
  // getAvailableRooms
  http.get("*/octorate/rooms/available", () => HttpResponse.json({})),
  // getRoomAvailabilityCalendar
  http.get("*/octorate/availability/calendar", () => HttpResponse.json({})),
  // checkRoomAvailability
  http.get("*/octorate/availability/check", () => HttpResponse.json({})),
  // getRoomImages
  http.get("*/octorate/room/images", () => HttpResponse.json({})),
  // getBookingURL
  http.get("*/octorate/booking/url", () => HttpResponse.json({})),
  // getNow
  http.get("*/octorate/now", () => HttpResponse.json({})),
  // getExtras
  http.get("*/octorate/extras", () => HttpResponse.json({})),
  // resetToken
  http.get("*/octorate/reset", () => HttpResponse.json({})),
  // syncAccommodationsWithOctorate
  http.post("*/octorate/accommodations/sync", () => HttpResponse.json({})),
  // getGroups
  http.post("*/permission/group/get", () => HttpResponse.json({})),
  // getPermissionsInGroup
  http.post("*/permission/group/get/single", () => HttpResponse.json({})),
  // updatePermissionInGroup
  http.post("*/permission/group/update", () => HttpResponse.json({})),
  // updateAccessGroupStatus
  http.post("*/permission/group/status", () => HttpResponse.json({})),
  // deleteAccessGroup
  http.post("*/permissions/group/delete", () => HttpResponse.json({})),
  // addAccessGroup
  http.post("*/permissions/group/add", () => HttpResponse.json({})),
  // addPermission
  http.post("*/permissions/add", () => HttpResponse.json({})),
  // deletePermissions
  http.post("*/permissions/delete", () => HttpResponse.json({})),
  // addPOI
  http.post("*/poi/add", () => HttpResponse.json({})),
  // deletePOIsByID
  http.post("*/activity/poi/delete", () => HttpResponse.json({})),
  // getPOIsByFilter
  http.post("*/activity/poi/get/filter", () => HttpResponse.json({})),
  // getPOIs
  http.get("*/pois", () => HttpResponse.json({})),
  // getRoutes
  http.get("*/routes", () => HttpResponse.json({})),
  // getPOIEditableDetails
  http.post("*/activity/poi/get/editable", () => HttpResponse.json({})),
  // getPOIDetails
  http.post("*/activity/poi/get/details", () => HttpResponse.json({})),
  // editPOI
  http.post("*/activity/poi/edit", () => HttpResponse.json({})),
  // getSelectorPOI
  http.post("*/poi/selector", () => HttpResponse.json({})),
  // getRecommendedPOIS
  http.get("*/poi/recommend", () => HttpResponse.json({})),
  // getPersonalizedPOIS
  http.post("*/poi/personalized", () => HttpResponse.json({})),
  // importPOIS
  http.get("*/poi/import", () => HttpResponse.json({})),
  // setClientTripSchedule
  http.post("*/clients/trip/schedule/set", () => HttpResponse.json({})),
  // getClientTripSchedule
  http.post("*/clients/trip/schedule/get", () => HttpResponse.json({})),
  // generatePlanning
  http.get("*/planning", () => HttpResponse.json({})),
  // getTripSchedule
  http.get("*/schedule", () => HttpResponse.json({})),
  // setTripSchedule
  http.put("*/schedule", () => HttpResponse.json({})),
  // addProviderOrOperator
  http.post("*/provider/add", () => HttpResponse.json({})),
  // editProviderOrOperator
  http.post("*/provider/edit", () => HttpResponse.json({})),
  // deleteProvidersByID
  http.post("*/provider/delete", () => HttpResponse.json({})),
  // getSelectorProviders
  http.post("*/provider/selector", () => HttpResponse.json({})),
  // getMyProviders
  http.post("*/provider/get/filter", () => HttpResponse.json({})),
  // getProviderEditableDetails
  http.post("*/provider/get/editable", () => HttpResponse.json({})),
  // updateProviderStatus
  http.post("*/provider/update/status", () => HttpResponse.json({})),
  // addGenericService
  http.post("*/service", () => HttpResponse.json({})),
  // duplicateGenericService
  http.post("*/service/duplicate", () => HttpResponse.json({})),
  // getQuestionsFromAccommodation
  http.post("*/service/accommodation/questions/get", () => HttpResponse.json({})),
  // getAccommodationsInDateRange
  http.post("*/service/accommodation/get/range", () => HttpResponse.json({})),
  // getRestaurantsInDate
  http.post("*/service/restaurants/get", () => HttpResponse.json({})),
  // getServicesByFilter
  http.post("*/activity/get/filter", () => HttpResponse.json({})),
  // getServiceEditableDetails
  http.post("*/service/get/editable", () => HttpResponse.json({})),
  // editService
  http.post("*/service/edit", () => HttpResponse.json({})),
  // deleteServicesByID
  http.post("*/activity/delete", () => HttpResponse.json({})),
  // updateServicesStatus
  http.post("*/activity/status/update", () => HttpResponse.json({})),
  // getServiceInfo
  http.post("*/service/get/info", () => HttpResponse.json({})),
  // getServiceAvailability
  http.get("*/service/availability", () => HttpResponse.json({})),
  // getCheckInOuts
  http.get("*/service/check_in_outs", () => HttpResponse.json({})),
  // downloadCheckOutImages
  http.get("*/service/check_out_images", () => HttpResponse.json({})),
  // getServicesOfInterest
  http.get("*/services", () => HttpResponse.json({})),
  // getItemInfoFromQRCode
  http.get("*/qr/item", () => HttpResponse.json({})),
  // getItemsWithQR
  http.get("*/items/qr", () => HttpResponse.json({})),
  // getDestinyQA
  http.get("*/destiny/qa", () => HttpResponse.json({})),
  // setDestinyQA
  http.post("*/destiny/qa", () => HttpResponse.json({})),
  // getServiceCheckInForm
  http.get("*/service/CheckInForm", () => HttpResponse.json({})),
  // updateServiceCheckInFormTemp
  http.post("*/service/CheckInForm", () => HttpResponse.json({})),
  // updateServiceCheckInForm
  http.post("*/service/CheckInFormTemp", () => HttpResponse.json({})),
  // submitTermsConditionsForm
  http.post("*/service/TermsConditionsForm", () => HttpResponse.json({})),
  // bulkServiceUpsert
  http.put("*/service/bulk", () => HttpResponse.json({})),
  // getAccommodationQAs
  http.get("*/service/qas", () => HttpResponse.json({})),
  // getAccommodationDistribution
  http.get("*/service/distribution", () => HttpResponse.json({})),
  // getChannelsByFilter
  http.get("*/streaming/channels/filter", () => HttpResponse.json({})),
  // getChannelEditableDetails
  http.get("*/streaming/channel", () => HttpResponse.json({})),
  // addChannel
  http.post("*/streaming/channel", () => HttpResponse.json({})),
  // updateChannel
  http.put("*/streaming/channel", () => HttpResponse.json({})),
  // deleteChannel
  http.delete("*/streaming/channel", () => HttpResponse.json({})),
  // updateChannelStatus
  http.put("*/streaming/channel/status", () => HttpResponse.json({})),
  // getSessionsByFilter
  http.get("*/streaming/session/filter", () => HttpResponse.json({})),
  // addInstantSession
  http.post("*/streaming/session", () => HttpResponse.json({})),
  // updateSession
  http.put("*/streaming/session", () => HttpResponse.json({})),
  // deleteStreamingSession
  http.delete("*/streaming/session", () => HttpResponse.json({})),
  // sendInviteToSession
  http.post("*/streaming/session/invite", () => HttpResponse.json({})),
  // joinSession
  http.post("*/streaming/session/join", () => HttpResponse.json({})),
  // endSession
  http.post("*/streaming/session/finish", () => HttpResponse.json({})),
  // getSessionUsersInfo
  http.get("*/streaming/session/user", () => HttpResponse.json({})),
  // getSessionStatus
  http.get("*/streaming/session/status", () => HttpResponse.json({})),
  // banSessionUser
  http.post("*/streaming/session/ban", () => HttpResponse.json({})),
  // getSessionAudience
  http.get("*/streaming/session/audience", () => HttpResponse.json({})),
  // getMyUserTrips
  http.post("*/clients/trip/get", () => HttpResponse.json({})),
  // newClientTrip
  http.post("*/clients/trip/appoint", () => HttpResponse.json({})),
  // createAccommodationCode
  http.post("*/trip/accommodation/code/gen", () => HttpResponse.json({})),
  // updateClientTrip
  http.post("*/clients/trip/update", () => HttpResponse.json({})),
  // getClientsTripsByFilter
  http.post("*/clients/trip/get/filter", () => HttpResponse.json({})),
  // softDeleteClientTripsByID
  http.post("*/clients/trip/delete", () => HttpResponse.json({})),
  // getCheckInInfo
  http.get("*/client/trip/check-in", () => HttpResponse.json({})),
  // commitCheckIn
  http.post("*/client/trip/check-in", () => HttpResponse.json({})),
  // uploadCheckOutImage
  http.post("*/client/trip/check-out/image", () => HttpResponse.json({})),
  // checkOut
  http.post("*/client/trip/check-out", () => HttpResponse.json({})),
  // getCheckOutInstructions
  http.get("*/client/trip/check-out", () => HttpResponse.json({})),
  // bookService
  http.post("*/service/booking", () => HttpResponse.json({})),
  // getTripUserTasks
  http.get("*/trip/actions", () => HttpResponse.json({})),
  // setTripUserTasks
  http.post("*/trip/actions", () => HttpResponse.json({})),
  // setTripServiceVideos
  http.post("*/trip/service/video", () => HttpResponse.json({})),
  // getTripServiceVideo
  http.get("*/trip/service/video", () => HttpResponse.json({})),
  // deleteTripServiceVideo
  http.delete("*/trip/service/video", () => HttpResponse.json({})),
  // setUserState
  http.post("*/clients/state/set", () => HttpResponse.json({})),
  // getUserState
  http.post("*/clients/state/get", () => HttpResponse.json({})),
  // addAppRating
  http.post("*/clients/rating/add", () => HttpResponse.json({})),
  // setUserProfile
  http.post("*/clients/profile/set", () => HttpResponse.json({})),
  // getUserProfile
  http.post("*/clients/profile/get", () => HttpResponse.json({})),
  // sendRecoverEmail
  http.post("*/user/recover", () => HttpResponse.json({})),
  // resetPassword
  http.post("*/user/reset", () => HttpResponse.json({})),
  // ready_live
  http.get("*/ready_live", () => HttpResponse.json({})),
  // getAppConfig
  http.get("*/app/config", () => HttpResponse.json({})),
  // joinersDashboard
  http.get("*/joiners", () => HttpResponse.json({})),
  // resizeImage
  http.get("*/image/resize", () => HttpResponse.json({})),
  // translateMultiLanguageTab
  http.post("*/multilanguage/translate", () => HttpResponse.json({})),
  // cleanCache
  http.post("*/cache/clean", () => HttpResponse.json({})),
  // getCacheStats
  http.get("*/cache/stats", () => HttpResponse.json({})),
  // appDeepLink
  http.get("*/app/deeplink", () => HttpResponse.json({})),
  // downloadCOSFilesByFolder
  http.get("*/cos/download", () => HttpResponse.json({})),
  // sendContactEmailFromWebpage
  http.post("*/contact/email", () => HttpResponse.json({})),
  // manageCronJobs
  http.post("*/jobs/manage", () => HttpResponse.json({})),
  // sendErrorReport
  http.post("*/error/report", () => HttpResponse.json({})),
  // getErrorReport
  http.get("*/error/report", () => HttpResponse.json({})),
  // getAppRatings
  http.get("*/service/ratings", () => HttpResponse.json({})),
  // getWatsonLogs
  http.get("*/watson/logs", () => HttpResponse.json({})),
  // getSessions
  http.get("*/sessions", () => HttpResponse.json({})),
  // getSessionsReport
  http.get("*/sessions/report", () => HttpResponse.json({})),
  // getSessionsReportFoundry
  http.get("*/sessions/report/foundry", () => HttpResponse.json({})),
  // list_Businessidentity
  http.get("*/business-identity", () => HttpResponse.json({})),
  // create_Businessidentity
  http.post("*/business-identity", () => HttpResponse.json({})),
  // agents
  http.get("*/business-identity/agents", () => HttpResponse.json({})),
  // assignThreads
  http.post("*/business-identity/assign-threads", () => HttpResponse.json({})),
  // deactivate
  http.delete("*/business-identity/:id", () => HttpResponse.json({})),
  // reactivate
  http.post("*/business-identity/:id/reactivate", () => HttpResponse.json({})),
  // agentDetail
  http.get("*/business-identity/agents/:id", () => HttpResponse.json({})),
  // list_Agents
  http.get("*/agents", () => HttpResponse.json({})),
  // create_Agents
  http.post("*/agents", () => HttpResponse.json({})),
  // backfill
  http.post("*/agents/backfill", () => HttpResponse.json({})),
  // get_Agents
  http.get("*/agents/:id", () => HttpResponse.json({})),
  // update
  http.put("*/agents/:id", () => HttpResponse.json({})),
  // remove_Agents
  http.delete("*/agents/:id", () => HttpResponse.json({})),
  // updateReference
  http.put("*/agents/:id/reference", () => HttpResponse.json({})),
  // indexingStatus
  http.get("*/agents/:id/indexing-status", () => HttpResponse.json({})),
  // list_Provideragent
  http.get("*/provider-agent", () => HttpResponse.json({})),
  // upsert_Provideragent
  http.put("*/provider-agent", () => HttpResponse.json({})),
  // remove_Provideragent
  http.delete("*/provider-agent/:prov_id/:role", () => HttpResponse.json({})),
  // get_Providerchannels
  http.get("*/provider-channels/:prov_id", () => HttpResponse.json({})),
  // putWhatsapp_Providerchannels
  http.put("*/provider-channels/:prov_id/whatsapp", () => HttpResponse.json({})),
  // deleteWhatsapp_Providerchannels
  http.delete("*/provider-channels/:prov_id/whatsapp", () => HttpResponse.json({})),
  // testWhatsapp_Providerchannels
  http.post("*/provider-channels/:prov_id/whatsapp/test", () => HttpResponse.json({})),
  // putKommo_Providerchannels
  http.put("*/provider-channels/:prov_id/kommo", () => HttpResponse.json({})),
  // deleteKommo_Providerchannels
  http.delete("*/provider-channels/:prov_id/kommo", () => HttpResponse.json({})),
  // putChannels_Providerchannels
  http.put("*/provider-channels/:prov_id/channels", () => HttpResponse.json({})),
  // get_Providerwidgetconfig
  http.get("*/provider-widget-config/:prov_id", () => HttpResponse.json({})),
  // upsert_Providerwidgetconfig
  http.put("*/provider-widget-config/:prov_id", () => HttpResponse.json({})),
  // backfillChannelHandler
  http.get("*/sessions/backfill-channel", () => HttpResponse.json({})),
  // backfillUserBehaviorHandler
  http.get("*/sessions/backfill-userbehavior", () => HttpResponse.json({})),
  // getSessionById
  http.get("*/sessions/:thread_id", () => HttpResponse.json({})),
  // synthesizeV2
  http.get("*/watson/TTS", () => HttpResponse.json({})),
  // refreshToken
  http.post("*/token/refresh", () => HttpResponse.json({})),
  // getEventsReport
  http.get("*/events/report", () => HttpResponse.json({})),
  // appLogger
  http.post("*/app/log", () => HttpResponse.json({})),
  // encodeMessageInQR
  http.get("*/qr/encode", () => HttpResponse.json({})),
  // recSysStartup
  http.get("*/recsys/startup", () => HttpResponse.json({})),
  // recSysPlanStatus
  http.get("*/recsys/plan-status/:task_id", () => HttpResponse.json({})),
  // getPoisDistance
  http.get("*/pois/distance", () => HttpResponse.json({})),
  // subscribeUser
  http.post("*/subscription", () => HttpResponse.json({})),
  // getGoogleVideos
  http.get("*/google/videos", () => HttpResponse.json({})),
  // getWatsonQuestions
  http.post("*/watson/questions/get/filter", () => HttpResponse.json({})),
  // getWatsonQuestionsSelector
  http.post("*/watson/questions/get/selector", () => HttpResponse.json({})),
  // deleteQuestions
  http.post("*/watson/questions/delete", () => HttpResponse.json({})),
  // upsertQuestion
  http.post("*/watson/questions/upsert", () => HttpResponse.json({})),
  // getToursByFilter
  http.post("*/activity/tour/get/filter", () => HttpResponse.json({})),
  // getToursInDateRange
  http.post("*/activity/tour/get/range", () => HttpResponse.json({})),
  // getTourInfoByID
  http.post("*/activity/tour/get/info", () => HttpResponse.json({})),
  // addTour
  http.post("*/tour/add", () => HttpResponse.json({})),
  // getTourEditableDetails
  http.post("*/tour/get/editable", () => HttpResponse.json({})),
  // importRoutes
  http.post("*/routes/import", () => HttpResponse.json({})),
  // getMapsPlacesAutocomplete
  http.get("*/maps/places/autocomplete", () => HttpResponse.json({})),
  // getMapsPlacesDetails
  http.get("*/maps/places/details", () => HttpResponse.json({})),
  // getMapsGeocode
  http.get("*/maps/geocode", () => HttpResponse.json({})),
  // getMapsStatic
  http.get("*/maps/static", () => HttpResponse.json({})),
  // postLogsBatch
  http.post("*/logs/batch", () => HttpResponse.json({"accepted":3,"rejected":1})),
  // getLogs
  http.get("*/logs", () => HttpResponse.json({"data":[{"id":918234,"created_at":"2026-09-18T14:02:11.000Z","environment":"prod","source":"app-ios","channel":"app","level":"error","category":"http","message":"GET /package/details -> 500","metadata":null,"user_id":"4821","provider_id":null,"device_id":"dev-9f2a","session_id":"sess-77c1","trace_id":"trace-4b90","request_id":"req-a10f","http_method":"GET","endpoint":"/package/details","status_code":500,"duration_ms":812,"request_data":null,"response_data":null,"app_version":"4.12.0","os_version":"iOS 18.1","device_model":"iPhone15,3","network_type":"wifi","fingerprint":"a1b2c3d4","breadcrumbs":[]}],"cursor":"918233"})),
  // getLog
  http.get("*/logs/:id", () => HttpResponse.json({"id":918234,"created_at":"2026-09-18T14:02:11.000Z","environment":"prod","source":"app-ios","channel":"app","level":"error","category":"http","message":"GET /package/details -> 500","metadata":null,"user_id":"4821","provider_id":null,"device_id":"dev-9f2a","session_id":"sess-77c1","trace_id":"trace-4b90","request_id":"req-a10f","http_method":"GET","endpoint":"/package/details","status_code":500,"duration_ms":812,"request_data":null,"response_data":null,"app_version":"4.12.0","os_version":"iOS 18.1","device_model":"iPhone15,3","network_type":"wifi","fingerprint":"a1b2c3d4","breadcrumbs":[]})),
  // deleteLog
  http.delete("*/logs/:id", () => HttpResponse.json({})),
  // postLogsBulkDelete
  http.post("*/logs/bulk-delete", () => HttpResponse.json({"deleted":3})),
  // getLogsTail
  http.get("*/logs/tail", () => HttpResponse.json({"data":[],"cursor":null})),
  // getSessionTimeline
  http.get("*/logs/sessions/:id/timeline", () => HttpResponse.json({"session_id":"sess-77c1","entries":[]})),
  // getTrace
  http.get("*/logs/trace/:trace_id", () => HttpResponse.json({"trace_id":"trace-4b90","entries":[],"azure_kql_link":null})),
  // getUserLogProfile
  http.get("*/logs/users/:id/profile", () => HttpResponse.json({"user_id":"4821","devices":["dev-9f2a"],"app_versions":["4.12.0"],"recent_sessions":["sess-77c1"],"top_errors":[]})),
  // getUsersRich
  http.get("*/logs/users/rich", () => HttpResponse.json([{"user_id":"4821","devices":["dev-9f2a"],"app_versions":["4.12.0"],"recent_sessions":["sess-77c1"],"top_errors":[]}])),
  // getLogsDevices
  http.get("*/logs/devices", () => HttpResponse.json(["iPhone15,3","Pixel 8"])),
  // getLogsSources
  http.get("*/logs/sources", () => HttpResponse.json(["app-ios","front-admin"])),
  // getLogsCategories
  http.get("*/logs/categories", () => HttpResponse.json(["http","auth"])),
  // getErrorGroups
  http.get("*/logs/errors/groups", () => HttpResponse.json([{"fingerprint":"a1b2c3d4","status":"open","assigned_to":null,"note":null,"updated_at":"2026-09-18T14:02:11.000Z","updated_by":null,"count":42,"last_seen":"2026-09-18T14:02:11.000Z"}])),
  // patchErrorGroupState
  http.patch("*/logs/errors/groups/:fingerprint/state", () => HttpResponse.json({"fingerprint":"a1b2c3d4","status":"resolved","assigned_to":"sergio@rebeca.travel","note":"Corregido en 4.12.1","updated_at":"2026-09-18T15:00:00.000Z","updated_by":"sergio@rebeca.travel","count":42,"last_seen":"2026-09-18T14:02:11.000Z"})),
  // getStats
  http.get("*/logs/stats", () => HttpResponse.json({"total":72000,"error_rate":0.006,"by_endpoint":[{"endpoint":"/package/details","count":1200,"p50":120,"p95":480,"p99":900}]})),
  // getStatsTimeseries
  http.get("*/logs/stats/timeseries", () => HttpResponse.json({"range":"24h","points":[{"ts":"2026-09-18T14:00:00.000Z","count":3100,"error_count":19}]})),
  // getBehaviourEvents
  http.get("*/logs/behaviour/events", () => HttpResponse.json([{"id":5501,"created_at":"2026-09-18T14:02:11.000Z","user_id":"4821","action":"tap","subject":"package_card","app_version":"4.12.0","metadata":null}])),
  // getBehaviourTopActions
  http.get("*/logs/behaviour/top-actions", () => HttpResponse.json([{"action":"tap","subject":"package_card","count":3120}])),
  // getBehaviourByVersion
  http.get("*/logs/behaviour/by-version", () => HttpResponse.json([{"app_version":"4.12.0","action":"tap","subject":"package_card","count":1800}])),
  // postBugs
  http.post("*/logs/bugs", () => HttpResponse.json({"id":501,"environment":"prod","source":"app-ios","user_id":"4821","session_id":"sess-77c1","severity":"high","description":"La app se cierra al abrir el detalle del paquete","device_model":"iPhone15,3","os_version":"iOS 18.1","app_version":"4.12.0","breadcrumbs":[],"related_log_ids":[918234],"screenshot_blob":null,"status":"new","assigned_to":null,"note":null,"created_at":"2026-09-18T14:05:00.000Z"})),
  // getBugs
  http.get("*/logs/bugs", () => HttpResponse.json([{"id":501,"environment":"prod","source":"app-ios","user_id":"4821","session_id":"sess-77c1","severity":"high","description":"La app se cierra al abrir el detalle del paquete","device_model":"iPhone15,3","os_version":"iOS 18.1","app_version":"4.12.0","breadcrumbs":[],"related_log_ids":[918234],"screenshot_blob":"bug-501.png","status":"new","assigned_to":null,"note":null,"created_at":"2026-09-18T14:05:00.000Z"}])),
  // getBug
  http.get("*/logs/bugs/:id", () => HttpResponse.json({"id":501,"environment":"prod","source":"app-ios","user_id":"4821","session_id":"sess-77c1","severity":"high","description":"La app se cierra al abrir el detalle del paquete","device_model":"iPhone15,3","os_version":"iOS 18.1","app_version":"4.12.0","breadcrumbs":[],"related_log_ids":[918234],"screenshot_blob":"bug-501.png","status":"new","assigned_to":null,"note":null,"created_at":"2026-09-18T14:05:00.000Z"})),
  // patchBug
  http.patch("*/logs/bugs/:id", () => HttpResponse.json({"id":501,"environment":"prod","source":"app-ios","user_id":"4821","session_id":"sess-77c1","severity":"high","description":"La app se cierra al abrir el detalle del paquete","device_model":"iPhone15,3","os_version":"iOS 18.1","app_version":"4.12.0","breadcrumbs":[],"related_log_ids":[918234],"screenshot_blob":"bug-501.png","status":"triaged","assigned_to":"sergio@rebeca.travel","note":"Reproducido en 4.12.0","created_at":"2026-09-18T14:05:00.000Z"})),
  // putBugScreenshot
  http.put("*/logs/bugs/:id/screenshot", () => HttpResponse.json({"id":501,"environment":"prod","source":"app-ios","user_id":"4821","session_id":"sess-77c1","severity":"high","description":"La app se cierra al abrir el detalle del paquete","device_model":"iPhone15,3","os_version":"iOS 18.1","app_version":"4.12.0","breadcrumbs":[],"related_log_ids":[918234],"screenshot_blob":"bug-501.png","status":"new","assigned_to":null,"note":null,"created_at":"2026-09-18T14:05:00.000Z"})),
  // getBugScreenshot
  http.get("*/logs/bugs/:id/screenshot", () => HttpResponse.json({})),
  // postReplay
  http.post("*/logs/replay", () => HttpResponse.json({"id":12,"parent_log_id":918234,"version":1,"status_code":500,"duration_ms":640,"response_data":null,"error":null,"launched_by":"sergio@rebeca.travel","created_at":"2026-09-18T15:10:00.000Z"})),
  // getLogReplays
  http.get("*/logs/:id/replays", () => HttpResponse.json([{"id":12,"parent_log_id":918234,"version":1,"status_code":500,"duration_ms":640,"response_data":null,"error":null,"launched_by":"sergio@rebeca.travel","created_at":"2026-09-18T15:10:00.000Z"}])),
  // deleteReplay
  http.delete("*/logs/replays/:id", () => HttpResponse.json({})),
  // postAuthTokens
  http.post("*/logs/auth/tokens", () => HttpResponse.json({"id":7,"prefix":"rl_live_9f2a","name":"app-ios prod","type":"emitter","source":"app-ios","user_id":null,"expires_at":null,"last_used":null,"token":"rl_live_9f2a1c7e4b3d6a8f0e2c5b1a9d7f3e6c"})),
  // getAuthTokens
  http.get("*/logs/auth/tokens", () => HttpResponse.json([{"id":7,"prefix":"rl_live_9f2a","name":"app-ios prod","type":"emitter","source":"app-ios","user_id":null,"expires_at":null,"last_used":"2026-09-18T14:02:11.000Z"}])),
  // deleteAuthToken
  http.delete("*/logs/auth/tokens/:id", () => HttpResponse.json({})),
  // getAgentTriageSummary
  http.get("*/logs/agent/triage-summary", () => HttpResponse.json({"generated_at":"2026-09-18T15:30:00.000Z","open_error_groups":4,"open_bugs":2,"top_error_groups":[{"fingerprint":"a1b2c3d4","status":"open","assigned_to":null,"note":null,"updated_at":"2026-09-18T14:02:11.000Z","updated_by":null,"count":42,"last_seen":"2026-09-18T14:02:11.000Z"}],"recent_bugs":[{"id":501,"environment":"prod","source":"app-ios","user_id":"4821","session_id":"sess-77c1","severity":"high","description":"La app se cierra al abrir el detalle del paquete","device_model":"iPhone15,3","os_version":"iOS 18.1","app_version":"4.12.0","breadcrumbs":[],"related_log_ids":[918234],"screenshot_blob":"bug-501.png","status":"new","assigned_to":null,"note":null,"created_at":"2026-09-18T14:05:00.000Z"}]})),
  // listTourRoutes
  http.get("*/tour-routes", () => HttpResponse.json([{"tour_route_id":14,"title":"Tour Reserva Nacional de Paracas","destination_id":3,"location":"Peru, Ica, Paracas","is_active":true,"stop_count":2,"image_ref":null,"thumb_ref":null,"credit_author":null,"credit_license":null,"credit_url":null}])),
  // getTourRoute
  http.get("*/tour-route", () => HttpResponse.json({"tour_route_id":14,"title":"Tour Reserva Nacional de Paracas","destination_id":3,"location":"Peru, Ica, Paracas","duration":240,"tags":["generic.adventurer","generic.animalfriendly"],"is_active":true,"image_ref":null,"thumb_ref":null,"credit_author":null,"credit_license":null,"credit_url":null,"description-es":"Se encuentra a 250 km al Sur de la ciudad de Lima.","description-en":"It is located 250 km south of Lima.","description-pt":null,"description-it":"Si trova a 250 km a sud della citta di Lima.","short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":"En la mañana","availability_hours-en":"In the morning","availability_hours-pt":null,"availability_hours-it":"Al mattino","translation_status":{"description":{"es":"ready","en":"ready","pt":"missing","it":"ready"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"},"availability_hours":{"es":"ready","en":"ready","pt":"missing","it":"ready"}},"stops":[{"tour_stop_id":501,"place_of_interest_id":4821,"poi_name":"Museo Julio C. Tello","order_index":0,"description-es":"Ubicado dentro de la Reserva Nacional de Paracas, fue inaugurado en 1964.","description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"translation_status":{"description":{"es":"ready","en":"pending","pt":"missing","it":"missing"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"}},"poi":{"description-es":"Museo dedicado a la cultura Paracas, con la coleccion de textiles y craneos deformados hallados por Julio C. Tello.","description-en":"Museum dedicated to the Paracas culture.","description-pt":"Museu dedicado a cultura Paracas.","description-it":"Museo dedicato alla cultura Paracas.","short_description-es":"Museo arqueologico","short_description-en":"Archaeological museum","short_description-pt":"Museu arqueologico","short_description-it":"Museo archeologico","availability_hours-es":"Martes a domingo, 9:00 a 17:00","availability_hours-en":"Tuesday to Sunday, 9am to 5pm","availability_hours-pt":"Terca a domingo, 9:00 as 17:00","availability_hours-it":"Da martedi a domenica, 9:00-17:00","images":[{"image_ref":"pois/4821/1.jpg","thumb_ref":"pois/4821/1_thumb.jpg"},{"image_ref":"pois/4821/2.jpg","thumb_ref":null}]}},{"tour_stop_id":502,"place_of_interest_id":4903,"poi_name":"Playa Roja","order_index":1,"description-es":null,"description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"translation_status":{"description":{"es":"missing","en":"missing","pt":"missing","it":"missing"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"}},"poi":{"description-es":"Playa de arena roja formada por la erosion de rocas volcanicas.","description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":null,"availability_hours-en":null,"availability_hours-pt":null,"availability_hours-it":null,"images":[]}}]})),
  // createTourRoute
  http.post("*/tour-route", () => HttpResponse.json({"tour_route_id":14,"title":"Tour Reserva Nacional de Paracas","destination_id":3,"location":"Peru, Ica, Paracas","duration":240,"tags":["generic.adventurer","generic.animalfriendly"],"is_active":true,"image_ref":null,"thumb_ref":null,"credit_author":null,"credit_license":null,"credit_url":null,"description-es":"Se encuentra a 250 km al Sur de la ciudad de Lima.","description-en":"It is located 250 km south of Lima.","description-pt":null,"description-it":"Si trova a 250 km a sud della citta di Lima.","short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":"En la mañana","availability_hours-en":"In the morning","availability_hours-pt":null,"availability_hours-it":"Al mattino","translation_status":{"description":{"es":"ready","en":"ready","pt":"missing","it":"ready"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"},"availability_hours":{"es":"ready","en":"ready","pt":"missing","it":"ready"}},"stops":[{"tour_stop_id":501,"place_of_interest_id":4821,"poi_name":"Museo Julio C. Tello","order_index":0,"description-es":"Ubicado dentro de la Reserva Nacional de Paracas, fue inaugurado en 1964.","description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"translation_status":{"description":{"es":"ready","en":"pending","pt":"missing","it":"missing"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"}},"poi":{"description-es":"Museo dedicado a la cultura Paracas, con la coleccion de textiles y craneos deformados hallados por Julio C. Tello.","description-en":"Museum dedicated to the Paracas culture.","description-pt":"Museu dedicado a cultura Paracas.","description-it":"Museo dedicato alla cultura Paracas.","short_description-es":"Museo arqueologico","short_description-en":"Archaeological museum","short_description-pt":"Museu arqueologico","short_description-it":"Museo archeologico","availability_hours-es":"Martes a domingo, 9:00 a 17:00","availability_hours-en":"Tuesday to Sunday, 9am to 5pm","availability_hours-pt":"Terca a domingo, 9:00 as 17:00","availability_hours-it":"Da martedi a domenica, 9:00-17:00","images":[{"image_ref":"pois/4821/1.jpg","thumb_ref":"pois/4821/1_thumb.jpg"},{"image_ref":"pois/4821/2.jpg","thumb_ref":null}]}},{"tour_stop_id":502,"place_of_interest_id":4903,"poi_name":"Playa Roja","order_index":1,"description-es":null,"description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"translation_status":{"description":{"es":"missing","en":"missing","pt":"missing","it":"missing"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"}},"poi":{"description-es":"Playa de arena roja formada por la erosion de rocas volcanicas.","description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":null,"availability_hours-en":null,"availability_hours-pt":null,"availability_hours-it":null,"images":[]}}]})),
  // updateTourRoute
  http.put("*/tour-route", () => HttpResponse.json({"tour_route_id":14,"title":"Tour Reserva Nacional de Paracas","destination_id":3,"location":"Peru, Ica, Paracas","duration":240,"tags":["generic.adventurer","generic.animalfriendly"],"is_active":true,"image_ref":null,"thumb_ref":null,"credit_author":null,"credit_license":null,"credit_url":null,"description-es":"Se encuentra a 250 km al Sur de la ciudad de Lima.","description-en":"It is located 250 km south of Lima.","description-pt":null,"description-it":"Si trova a 250 km a sud della citta di Lima.","short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":"En la mañana","availability_hours-en":"In the morning","availability_hours-pt":null,"availability_hours-it":"Al mattino","translation_status":{"description":{"es":"ready","en":"ready","pt":"missing","it":"ready"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"},"availability_hours":{"es":"ready","en":"ready","pt":"missing","it":"ready"}},"stops":[{"tour_stop_id":501,"place_of_interest_id":4821,"poi_name":"Museo Julio C. Tello","order_index":0,"description-es":"Ubicado dentro de la Reserva Nacional de Paracas, fue inaugurado en 1964.","description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"translation_status":{"description":{"es":"ready","en":"pending","pt":"missing","it":"missing"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"}},"poi":{"description-es":"Museo dedicado a la cultura Paracas, con la coleccion de textiles y craneos deformados hallados por Julio C. Tello.","description-en":"Museum dedicated to the Paracas culture.","description-pt":"Museu dedicado a cultura Paracas.","description-it":"Museo dedicato alla cultura Paracas.","short_description-es":"Museo arqueologico","short_description-en":"Archaeological museum","short_description-pt":"Museu arqueologico","short_description-it":"Museo archeologico","availability_hours-es":"Martes a domingo, 9:00 a 17:00","availability_hours-en":"Tuesday to Sunday, 9am to 5pm","availability_hours-pt":"Terca a domingo, 9:00 as 17:00","availability_hours-it":"Da martedi a domenica, 9:00-17:00","images":[{"image_ref":"pois/4821/1.jpg","thumb_ref":"pois/4821/1_thumb.jpg"},{"image_ref":"pois/4821/2.jpg","thumb_ref":null}]}},{"tour_stop_id":502,"place_of_interest_id":4903,"poi_name":"Playa Roja","order_index":1,"description-es":null,"description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"translation_status":{"description":{"es":"missing","en":"missing","pt":"missing","it":"missing"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"}},"poi":{"description-es":"Playa de arena roja formada por la erosion de rocas volcanicas.","description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":null,"availability_hours-en":null,"availability_hours-pt":null,"availability_hours-it":null,"images":[]}}]})),
  // deleteTourRoute
  http.delete("*/tour-route", () => HttpResponse.json({"tour_route_id":14,"title":"Tour Reserva Nacional de Paracas","destination_id":3,"location":"Peru, Ica, Paracas","duration":240,"tags":["generic.adventurer"],"is_active":false,"image_ref":null,"thumb_ref":null,"credit_author":null,"credit_license":null,"credit_url":null,"description-es":"Se encuentra a 250 km al Sur de la ciudad de Lima.","description-en":"It is located 250 km south of Lima.","description-pt":null,"description-it":"Si trova a 250 km a sud della citta di Lima.","short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":"En la mañana","availability_hours-en":"In the morning","availability_hours-pt":null,"availability_hours-it":"Al mattino","translation_status":{"description":{"es":"ready","en":"ready","pt":"missing","it":"ready"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"},"availability_hours":{"es":"ready","en":"ready","pt":"missing","it":"ready"}},"stops":[{"tour_stop_id":501,"place_of_interest_id":4821,"poi_name":"Museo Julio C. Tello","order_index":0,"description-es":"Ubicado dentro de la Reserva Nacional de Paracas, fue inaugurado en 1964.","description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"translation_status":{"description":{"es":"ready","en":"pending","pt":"missing","it":"missing"},"short_description":{"es":"missing","en":"missing","pt":"missing","it":"missing"}},"poi":{"description-es":null,"description-en":null,"description-pt":null,"description-it":null,"short_description-es":null,"short_description-en":null,"short_description-pt":null,"short_description-it":null,"availability_hours-es":null,"availability_hours-en":null,"availability_hours-pt":null,"availability_hours-it":null,"images":[]}}]})),
  // uploadTourRouteImage
  http.post("*/tour-route/image", () => HttpResponse.json({"image_ref":"routes/14/cover.jpg","thumb_ref":"routes/14/cover_thumb.jpg","credit_author":null,"credit_license":null,"credit_url":null})),
  // retranslateTourRouteField
  http.post("*/tour-route/translate", () => HttpResponse.json({"tour_route_id":14,"tour_stop_id":null,"field":"description","language_code":"pt","status":"pending"})),
  // previewTourRouteImport
  http.post("*/tour-route/import/preview", () => HttpResponse.json({"header_errors":[],"routes":[{"title":"Tour Reserva Nacional de Paracas","destination_guess":"Peru, Ica, Paracas","existing_tour_route_id":14,"stops_that_would_be_lost":2,"stops":[{"row":2,"name":"Museo Julio C. Tello","order_index":1,"match":{"kind":"exact","poi_id":4821,"poi_name":"Museo Julio C. Tello"}},{"row":3,"name":"Reserva Nacional De Paracas","order_index":2,"match":{"kind":"fuzzy","poi_id":4890,"poi_name":"Reserva Nacional de Paracas","score":0.92}}]}],"row_errors":[{"row":22,"reason":"sin nombre de parada"}],"images":[{"path":"Fotos.Rebeca/Pisco.Paracas/Museo.Tello.jpg","found_in_zip":true}],"discarded_tags":[{"tag":"Cultura.generic.culture_immersion","count":1}]})),
  // importTourRoutes
  http.post("*/tour-route/import", () => HttpResponse.json({"created":[{"tour_route_id":27,"title":"Tour Cañón de los Perdidos"}],"overwritten":[],"skipped":[{"title":"Full Day Líneas de Nasca y geoglifos de Palpa","reason":"fila 22 sin nombre de parada, no overrides recibido para esa fila"}]})),
  // listPublicApiKeys
  http.get("*/public-api/keys", () => HttpResponse.json({})),
  // createPublicApiKey
  http.post("*/public-api/keys", () => HttpResponse.json({})),
  // rotatePublicApiKey
  http.post("*/public-api/keys/:id/rotate", () => HttpResponse.json({})),
  // revokePublicApiKey
  http.delete("*/public-api/keys/:id", () => HttpResponse.json({})),
  // listPublicApiOrigins
  http.get("*/public-api/origins", () => HttpResponse.json({})),
  // addPublicApiOrigin
  http.post("*/public-api/origins", () => HttpResponse.json({})),
  // deletePublicApiOrigin
  http.delete("*/public-api/origins/:id", () => HttpResponse.json({})),
  // listPublicApiAgents
  http.get("*/public-api/agents", () => HttpResponse.json({})),
  // setPublicApiAgent
  http.put("*/public-api/agents", () => HttpResponse.json({})),
  // getPublicApiUsage
  http.get("*/public-api/usage", () => HttpResponse.json({})),
  // getPublicApiQuota
  http.get("*/public-api/quota", () => HttpResponse.json({})),
  // setPublicApiQuota
  http.put("*/public-api/quota", () => HttpResponse.json({})),
];
