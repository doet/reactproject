(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[51],{815:function(a,e,t){"use strict";t.r(e);var n=t(151),l=t(152),o=t(155),c=t(154),d=t(153),m=t(2),r=t.n(m),s=t(740),i=t.n(s),u=t(496),h=t(497),p=t(500),g=t(772),k=t(737),b=t(738),E=t(636),C=t(637),f=t(523),_=t(739),v=(t(757),t(758)),w=function(a){Object(c.a)(t,a);var e=Object(d.a)(t);function t(a){var l;Object(n.a)(this,t),(l=e.call(this,a)).toggleCud=function(a){var e={uid:"",nama:"",nm_lapak:"",no_kontak:"",created_at:""};if(!l.state.cudmodal){if(l.tabel.current.getSelection()[0]&&(e=l.tabel.current.getSelection()[0]),"Tambah"!==a.target.name&&!e.uid)return alert("data belum dipilih");delete e._visible}l.setState({data:e,cudmodal:!l.state.cudmodal,title:a.target.name})},l.handleChange=function(a){var e=l.state.data;e[a.target.name]=a.target.value,l.setState({data:e})},l.handleCud=function(a){var e=l.state.data;"Tambah"===a.target.name&&(e.oper="add"),"Ubah"===a.target.name&&(e.oper="edit"),"Hapus"===a.target.name&&(e.oper="del"),i.a.post("https://nino-project.000webhostapp.com/public/api/mitra/cud",e).then((function(a){"success"===a.data.status&&(l.getData(),l.setState({cudmodal:!l.state.cudmodal,data:{uid:"",nama:"",nm_lapak:"",no_kontak:""}})),console.log(a)})).catch((function(a){console.log(a)})).then((function(){}))};return l.state={columns:[{text:"Nama",dataField:"nama",width:150},{text:"Brand",dataField:"nm_lapak",width:150},{text:"Kontak",dataField:"no_kontak",width:150},{text:"created_at",dataField:"created_at"}],source:new v.b.dataAdapter({dataFields:[{name:"nama",type:"string"},{name:"nm_lapak",type:"string"},{name:"no_kontak",type:"string"},{name:"created_at",type:"string"}],dataType:"json",id:"id",localData:""}),data:{uid:"",nama:"",nm_lapak:"",no_kontak:"",created_at:""},dataedit:{uid:"",nama:"",nm_lapak:"",kontak:""},cudmodal:!1,title:"",blank:""},l.tabel=Object(m.createRef)(),l.toggleCud=l.toggleCud.bind(Object(o.a)(l)),l.handleCud=l.handleCud.bind(Object(o.a)(l)),l.handleChange=l.handleChange.bind(Object(o.a)(l)),l}return Object(l.a)(t,[{key:"getData",value:function(){var a=this;i.a.get("https://nino-project.000webhostapp.com/public/api/mitra/alldata").then((function(e){var t={dataFields:[{name:"nama"},{name:"nm_lapak"},{name:"no_kontak"},{name:"created_at"}],dataType:"json",id:"id",localData:e.data};a.setState({source:new v.b.dataAdapter(t)}),console.log("in",e.data)})).catch((function(a){console.log(a)})).then((function(){}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(u.a,{className:"align-items-center"},r.a.createElement(h.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},r.a.createElement(p.a,{block:!0,color:"success",onClick:this.toggleCud,name:"Tambah"},"Tambah")),r.a.createElement(h.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},r.a.createElement(p.a,{block:!0,color:"primary",onClick:this.toggleCud,name:"Ubah"},"Ubah")),r.a.createElement(h.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},r.a.createElement(p.a,{block:!0,color:"danger",onClick:this.toggleCud,name:"Hapus"},"Hapus"))),r.a.createElement(g.a,{isOpen:this.state.cudmodal,toggle:this.toggleCud,className:"modal-lg "+this.props.className},r.a.createElement(k.a,{toggle:this.toggleAdd},this.state.title," Data"),r.a.createElement(b.a,null,"Hapus"!==this.state.title?r.a.createElement("div",null,r.a.createElement(E.a,{row:!0},r.a.createElement(h.a,{md:"3"},r.a.createElement(C.a,{htmlFor:"nama"},"Nama")),r.a.createElement(h.a,{xs:"12",md:"9"},r.a.createElement(f.a,{type:"text",id:"nama",name:"nama",defaultValue:this.state.data.nama,onChange:this.handleChange,placeholder:"Nama Owner"}))),r.a.createElement(E.a,{row:!0},r.a.createElement(h.a,{md:"3"},r.a.createElement(C.a,{htmlFor:"brand"},"Brand")),r.a.createElement(h.a,{xs:"12",md:"9"},r.a.createElement(f.a,{type:"text",id:"nm_lapak",name:"nm_lapak",defaultValue:this.state.data.nm_lapak,onChange:this.handleChange,placeholder:"Nama Brand"}))),r.a.createElement(E.a,{row:!0},r.a.createElement(h.a,{md:"3"},r.a.createElement(C.a,{htmlFor:"kontak"},"Kontak")),r.a.createElement(h.a,{xs:"12",md:"9"},r.a.createElement(f.a,{type:"text",id:"kontak",name:"no_kontak",defaultValue:this.state.data.no_kontak,onChange:this.handleChange,placeholder:"Nomor Kontak"})))):r.a.createElement("div",null,"Anda akan menghapus data ",this.state.data.nama," (",this.state.data.nm_lapak,")")),r.a.createElement(_.a,null,r.a.createElement(p.a,{color:"primary",onClick:this.handleCud,name:this.state.title},this.state.title),r.a.createElement(p.a,{color:"secondary",onClick:this.toggleCud},"Batal"))),r.a.createElement(v.a,{ref:this.tabel,columns:this.state.columns,source:this.state.source,width:"100%",selectionMode:"singleRow",columnsResize:!0,pageable:!0,pagerButtonsCount:10,altRows:!0,sortable:!0}))}}]),t}(r.a.PureComponent);e.default=w}}]);
//# sourceMappingURL=51.f4a36634.chunk.js.map