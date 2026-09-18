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
];
