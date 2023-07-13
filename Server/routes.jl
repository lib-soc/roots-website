
using Genie.Router, Genie.Requests, Genie.Renderer.Json, JSON3
using Server.BasicController


#---Basic-----------------------------------------------------------

route("/:locale/manifesto/*", BasicController.manifesto, named = :manifesto)

route("/:locale/join-us/*", BasicController.join_us, named = :join_us)

route("/:locale/partners/*", BasicController.partners, named = :partners)

route("/:locale/*", BasicController.landing, named = :landing)
