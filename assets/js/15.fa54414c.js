(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{412:function(e,t,r){"use strict";r.r(t);var n=r(3),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"background"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),r("p",[e._v("Cadence historically has been using TChannel transport with Thrift encoding for both internal RPC calls and communication with client SDKs. gRPC is becoming a de-facto industry standard with much better adoption and community support. It offers features such as authentication and streaming that are very relevant for Cadence. Moreover, TChannel is being deprecated within Uber itself, pushing an effort for this migration. During the last year we’ve implemented multiple changes in server and SDK that allows users to use gRPC in Cadence, as well as to upgrade their existing Cadence cluster in a backward compatible way. This post tracks the completed work items and our future plans.")]),e._v(" "),r("h2",{attrs:{id:"our-approach"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#our-approach"}},[e._v("#")]),e._v(" Our Approach")]),e._v(" "),r("p",[e._v("With ~500 services using Cadence at Uber and many more open source customers around the world, we had to think about the gRPC transition in a backwards compatible way. We couldn’t simply flip transport and encoding everywhere. Instead we needed to support both protocols as an intermediate step to ensure a smooth transition for our users.")]),e._v(" "),r("p",[e._v("Cadence was using Thrift/TChannel not just for the API with client SDKs. They were also used for RPC calls between internal Cadence server components and also between different data centers. When starting this migration we had a choice of either starting with public APIs first or all the internal things within the server. We chose the latter one, so that we could gain experience and iterate faster within the server without disruption to the clients. With server side done and listening for both protocols, dynamic config flag was exposed to switch traffic internally. It allowed gradual deployment and provided an option to rollback if needed.")]),e._v(" "),r("p",[e._v("The next step - client migration. We have more users for the Go SDK at Uber, that is why we started with it. Current version of SDK exposes Thrift types via public API, therefore we can not remove them without breaking changes. While we have plans for revamped v2 SDK, current users are able to use gRPC as well - with the help of a "),r("a",{attrs:{href:"https://github.com/uber-go/cadence-client/blob/v0.18.2/compatibility/thrift2proto.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("translation adapter"),r("OutboundLink")],1),e._v(". Migration is underway starting with "),r("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/canary",target:"_blank",rel:"noopener noreferrer"}},[e._v("cadence canary service"),r("OutboundLink")],1),e._v(", and then onboarding user services one by one.")]),e._v(" "),r("p",[e._v("We plan to support TChannel for a few more releases and then eventually drop it in a future.")]),e._v(" "),r("h2",{attrs:{id:"system-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#system-overview"}},[e._v("#")]),e._v(" System overview")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/grpc-migration.svg",alt:"gRPC migration overview"}})]),e._v(" "),r("ol",[r("li",[e._v("The frontend of "),r("a",{attrs:{href:"https://github.com/uber/cadence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cadence Server"),r("OutboundLink")],1),e._v(" exposes two inbounds for both gRPC and TChannel starting "),r("a",{attrs:{href:"https://github.com/uber/cadence/releases/tag/v0.21.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.21.0 release"),r("OutboundLink")],1),e._v(". gRPC traffic is being served on a different port that can be configured "),r("a",{attrs:{href:"https://github.com/uber/cadence/blob/v0.21.0/config/development.yaml#L25",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(". For gRPC API we introduced "),r("a",{attrs:{href:"https://github.com/uber/cadence-idl/tree/master/proto/uber/cadence/api/v1",target:"_blank",rel:"noopener noreferrer"}},[e._v("proto IDL"),r("OutboundLink")],1),e._v(" definitions. We will keep TChannel open on frontend for some time to allow gradual client migration.")]),e._v(" "),r("li",[e._v("Starting with "),r("a",{attrs:{href:"https://github.com/uber/cadence/releases/tag/v0.21.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.21.0"),r("OutboundLink")],1),e._v(" internal components of Cadence Server (history & matching) also started accepting gRPC traffic. Sending traffic via gRPC is off by default and could be enabled with a flag in "),r("a",{attrs:{href:"https://github.com/uber/cadence/blob/v0.21.0/config/dynamicconfig/development.yaml#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("dynamic config"),r("OutboundLink")],1),e._v(". Planned for v0.24.0 it will be enabled by default, with an option to opt-out.")]),e._v(" "),r("li",[e._v("Starting with v0.23.0 communication between different Cadence clusters can be switched to gRPC via this "),r("a",{attrs:{href:"https://github.com/uber/cadence/blob/0.23.x/config/development_active.yaml#L82",target:"_blank",rel:"noopener noreferrer"}},[e._v("configuration"),r("OutboundLink")],1),e._v(". It is used for replication and request redirection to different DC.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/uber-go/cadence-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go SDK"),r("OutboundLink")],1),e._v(" has exposed generated Thrift types via its public API. This complicated migration, because switching them to proto types (or rpc agnostic types) means breaking changes. Because of this we are pursuing two alternatives:\n"),r("ol",[r("li",[e._v("(A) Short term: starting with "),r("a",{attrs:{href:"https://github.com/uber-go/cadence-client/releases/tag/v0.18.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.18.2"),r("OutboundLink")],1),e._v(" a "),r("a",{attrs:{href:"https://github.com/uber-go/cadence-client/blob/v0.18.2/compatibility/thrift2proto.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("compatibility layer"),r("OutboundLink")],1),e._v(" is available which makes translation between thrift-proto types underneath. It allows using gRPC communication while still using Thrift based API. "),r("a",{attrs:{href:"https://github.com/uber-common/cadence-samples/pull/52",target:"_blank",rel:"noopener noreferrer"}},[e._v("Usage example"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("(B) Long term: we are currently designing v2 SDK that will support gRPC directly. Its API will be RPC agnostic and will include other usability improvements. You can check some ideas that are being considered "),r("a",{attrs:{href:"https://github.com/uber-go/cadence-client/issues/1133",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/uber/cadence-java-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java SDK"),r("OutboundLink")],1),e._v(" is currently on TChannel only. Move to gRPC is planned for 2022 H1.")]),e._v(" "),r("li",[e._v("It is now possible to communicate with gRPC from other languages as well. Use "),r("a",{attrs:{href:"https://github.com/uber/cadence-idl/tree/master/proto/uber/cadence/api/v1",target:"_blank",rel:"noopener noreferrer"}},[e._v("proto IDLs"),r("OutboundLink")],1),e._v(" to generate bindings for your preferred language. "),r("a",{attrs:{href:"https://github.com/vytautas-karpavicius/cadence-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minimal example"),r("OutboundLink")],1),e._v(" for doing it in python.")]),e._v(" "),r("li",[e._v("WebUI and CLI are currently on TChannel. They are planned to be switched to gRPC for 2022 H1.")])]),e._v(" "),r("h2",{attrs:{id:"migration-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#migration-steps"}},[e._v("#")]),e._v(" Migration steps")]),e._v(" "),r("h3",{attrs:{id:"upgrading-cadence-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-cadence-server"}},[e._v("#")]),e._v(" Upgrading Cadence server")]),e._v(" "),r("ol",[r("li",[e._v("If you are using an older version (before v0.21.0), make sure to disable internal gRPC communication at first. Needed to ensure that all nodes in the cluster are ready to accept gRPC traffic, before switching it on. This is controlled by the "),r("a",{attrs:{href:"https://github.com/uber/cadence/blob/v0.21.0/config/dynamicconfig/development.yaml#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("system.enableGRPCOutbound"),r("OutboundLink")],1),e._v(" flag in dynamic config.")]),e._v(" "),r("li",[e._v("Once deployed, flip system.enableGRPCOutbound to true. It will require a cluster restart for setting to take effect.")]),e._v(" "),r("li",[e._v("If you are operating in more than one DC - recommended server version to upgrade to is v0.23.0 or newer. Once individual clusters with gRPC support are deployed, please update "),r("a",{attrs:{href:"https://github.com/uber/cadence/blob/0.23.x/config/development_active.yaml#L82",target:"_blank",rel:"noopener noreferrer"}},[e._v("config"),r("OutboundLink")],1),e._v(" to switch cross DC traffic to gRPC. Don’t forget to update ports as well. We also recommend increasing "),r("a",{attrs:{href:"https://github.com/uber/cadence/blob/0.23.x/config/development.yaml#L29",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpcMaxMsgSize"),r("OutboundLink")],1),e._v(" to 32MB which is needed to ensure smooth replication. After config change you will need a restart for setting to take effect.")]),e._v(" "),r("li",[e._v("Do not forget that gRPC runs on a different port, therefore you might need to open it on docker containers, firewalls, etc.")])]),e._v(" "),r("h3",{attrs:{id:"upgrading-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-clients"}},[e._v("#")]),e._v(" Upgrading clients")]),e._v(" "),r("ol",[r("li",[e._v("GoSDK - Follow an "),r("a",{attrs:{href:"https://github.com/uber-common/cadence-samples/pull/52",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),r("OutboundLink")],1),e._v(" to inject Thrift-to-proto adapter during client initialization and update your config to use the gRPC port.")])]),e._v(" "),r("h3",{attrs:{id:"status-at-uber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status-at-uber"}},[e._v("#")]),e._v(" Status at Uber")]),e._v(" "),r("ul",[r("li",[e._v("All clusters run gRPC traffic internally for 4 months without any issues.")]),e._v(" "),r("li",[e._v("Cross DC traffic has been switched to gRPC this month.")]),e._v(" "),r("li",[e._v("With internal tooling updated, we are starting to onboard services to use the Go SDK gRPC compatibility layer.")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("Do not hesitate to reach out to us ("),r("a",{attrs:{href:"mailto:cadence-oss@googlegroups.com"}},[e._v("cadence-oss@googlegroups.com")]),e._v(" or "),r("a",{attrs:{href:"http://t.uber.com/cadence-slack",target:"_blank",rel:"noopener noreferrer"}},[e._v("slack"),r("OutboundLink")],1),e._v(") if you have any questions.")]),e._v(" "),r("p",[e._v("The Uber Cadence team")])])}),[],!1,null,null,null);t.default=a.exports}}]);