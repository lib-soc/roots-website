
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as validate_store, e as component_subscribe, o as onMount, g as globals, f as empty, n as noop, h as detach_dev, j as validate_each_argument, k as element, t as text, l as space, m as add_location, p as attr_dev, q as src_url_equal, r as set_custom_element_data, u as append_dev, w as set_data_dev, x as destroy_each } from './index-b7675d8f.js';
import { w as writable } from './index-674dbc31.js';
import { coopsByCountry, addMarkersCoops } from '../../../../../../../../../js/coops.js';
import { loadLocaleContent } from '../../../../../../../../../js/libraries/serverTools.js';
import '../../../../../../../../../js/components/map-component.js';

/* src\cooperatives-component.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;

const file = "src\\cooperatives-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i][0];
	child_ctx[8] = list[i][1];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (31:4) {#if $loaded==2}
function create_if_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t0_value = /*$content*/ ctx[1].heading + "";
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let p;
	let t3_value = /*$content*/ ctx[1].p1 + "";
	let t3;
	let t4;
	let h3;
	let t5_value = /*$content*/ ctx[1].subheading1 + "";
	let t5;
	let t6;
	let map_component;
	let map_component_callback_value;
	let t7;
	let each_value = Object.entries(coopsByCountry);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			img = element("img");
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = space();
			h3 = element("h3");
			t5 = text(t5_value);
			t6 = space();
			map_component = element("map-component");
			t7 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(h1, file, 33, 16, 913);
			attr_dev(img, "id", "coops-img");
			if (!src_url_equal(img.src, img_src_value = "/img/common/coops.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "coops");
			add_location(img, file, 34, 16, 958);
			add_location(p, file, 35, 16, 1036);
			add_location(h3, file, 36, 16, 1074);
			set_custom_element_data(map_component, "id", "map");
			set_custom_element_data(map_component, "callback", map_component_callback_value = /*func*/ ctx[6]);
			add_location(map_component, file, 37, 16, 1123);
			attr_dev(div0, "id", "text-container");
			add_location(div0, file, 32, 12, 870);
			attr_dev(div1, "id", "container");
			add_location(div1, file, 31, 8, 836);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, img);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			append_dev(div0, t4);
			append_dev(div0, h3);
			append_dev(h3, t5);
			append_dev(div0, t6);
			append_dev(div0, map_component);
			append_dev(div0, t7);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 2 && t0_value !== (t0_value = /*$content*/ ctx[1].heading + "")) set_data_dev(t0, t0_value);
			if (dirty & /*$content*/ 2 && t3_value !== (t3_value = /*$content*/ ctx[1].p1 + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$content*/ 2 && t5_value !== (t5_value = /*$content*/ ctx[1].subheading1 + "")) set_data_dev(t5, t5_value);

			if (dirty & /*$content*/ 2 && map_component_callback_value !== (map_component_callback_value = /*func*/ ctx[6])) {
				set_custom_element_data(map_component, "callback", map_component_callback_value);
			}

			if (dirty & /*Object, coopsByCountry, $content*/ 2) {
				each_value = Object.entries(coopsByCountry);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(31:4) {#if $loaded==2}",
		ctx
	});

	return block;
}

// (42:24) {#each coops as coop}
function create_each_block_1(ctx) {
	let div2;
	let div1;
	let div0;
	let p0;
	let b0;
	let t0_value = /*$content*/ ctx[1].name + "";
	let t0;
	let t1;
	let t2_value = /*coop*/ ctx[11].name + "";
	let t2;
	let t3;
	let p1;
	let b1;
	let t4_value = /*$content*/ ctx[1].location + "";
	let t4;
	let t5;

	let t6_value = /*$content*/ ctx[1][/*coop*/ ctx[11].location[0][0]] + (/*coop*/ ctx[11].location[0][1] == ""
	? ""
	: ", " + /*$content*/ ctx[1][/*coop*/ ctx[11].location[0][1]]) + "";

	let t6;
	let t7;
	let p2;
	let b2;
	let t8_value = /*$content*/ ctx[1].market + "";
	let t8;
	let t9;
	let t10_value = /*$content*/ ctx[1][/*coop*/ ctx[11].market] + "";
	let t10;
	let t11;
	let p3;
	let b3;
	let t12_value = /*$content*/ ctx[1].workers + "";
	let t12;
	let t13;
	let t14_value = /*coop*/ ctx[11].workers + "";
	let t14;
	let t15;
	let p4;
	let b4;
	let t16_value = /*$content*/ ctx[1].status + "";
	let t16;
	let t17;
	let t18_value = /*$content*/ ctx[1][/*coop*/ ctx[11].status] + "";
	let t18;
	let t19;
	let p5;
	let b5;
	let t20_value = /*$content*/ ctx[1].website + "";
	let t20;
	let t21;
	let a0;
	let t22_value = /*coop*/ ctx[11].website + "";
	let t22;
	let t23;
	let p6;
	let b6;
	let t24_value = /*$content*/ ctx[1].contact + "";
	let t24;
	let t25;
	let a1;
	let t26_value = /*$content*/ ctx[1][/*coop*/ ctx[11].contact[1]] + "";
	let t26;
	let t27;
	let picture;
	let source0;
	let t28;
	let source1;
	let t29;
	let img;
	let t30;
	let p7;
	let b7;
	let t31_value = /*$content*/ ctx[1].description + "";
	let t31;
	let t32;
	let t33_value = /*$content*/ ctx[1][/*coop*/ ctx[11].description] + "";
	let t33;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			p0 = element("p");
			b0 = element("b");
			t0 = text(t0_value);
			t1 = text(": ");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			b1 = element("b");
			t4 = text(t4_value);
			t5 = text(": ");
			t6 = text(t6_value);
			t7 = space();
			p2 = element("p");
			b2 = element("b");
			t8 = text(t8_value);
			t9 = text(": ");
			t10 = text(t10_value);
			t11 = space();
			p3 = element("p");
			b3 = element("b");
			t12 = text(t12_value);
			t13 = text(": ");
			t14 = text(t14_value);
			t15 = space();
			p4 = element("p");
			b4 = element("b");
			t16 = text(t16_value);
			t17 = text(": ");
			t18 = text(t18_value);
			t19 = space();
			p5 = element("p");
			b5 = element("b");
			t20 = text(t20_value);
			t21 = text(": ");
			a0 = element("a");
			t22 = text(t22_value);
			t23 = space();
			p6 = element("p");
			b6 = element("b");
			t24 = text(t24_value);
			t25 = text(": ");
			a1 = element("a");
			t26 = text(t26_value);
			t27 = space();
			picture = element("picture");
			source0 = element("source");
			t28 = space();
			source1 = element("source");
			t29 = space();
			img = element("img");
			t30 = space();
			p7 = element("p");
			b7 = element("b");
			t31 = text(t31_value);
			t32 = text(": ");
			t33 = text(t33_value);
			add_location(b0, file, 45, 43, 1678);
			add_location(p0, file, 45, 40, 1675);
			add_location(b1, file, 46, 43, 1762);
			add_location(p1, file, 46, 40, 1759);
			add_location(b2, file, 47, 43, 1943);
			add_location(p2, file, 47, 40, 1940);
			add_location(b3, file, 48, 43, 2041);
			add_location(p3, file, 48, 40, 2038);
			add_location(b4, file, 49, 43, 2131);
			add_location(p4, file, 49, 40, 2128);
			add_location(b5, file, 50, 43, 2229);
			attr_dev(a0, "href", "https://www." + /*coop*/ ctx[11].website);
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "rel", "noreferrer");
			add_location(a0, file, 50, 70, 2256);
			add_location(p5, file, 50, 40, 2226);
			add_location(b6, file, 51, 43, 2392);
			attr_dev(a1, "href", /*coop*/ ctx[11].contact[0]);
			attr_dev(a1, "target", ";_blank;");
			attr_dev(a1, "rel", "noreferrer");
			add_location(a1, file, 51, 70, 2419);
			add_location(p6, file, 51, 40, 2389);
			add_location(div0, file, 44, 36, 1628);
			attr_dev(source0, "srcset", "/img/coops/" + /*coop*/ ctx[11].logo + ".webp");
			add_location(source0, file, 54, 40, 2644);
			attr_dev(source1, "srcset", "/img/coops/" + /*coop*/ ctx[11].logo + ".png");
			add_location(source1, file, 55, 40, 2735);
			attr_dev(img, "class", "coop-logo");
			attr_dev(img, "alt", "logo");
			add_location(img, file, 56, 40, 2825);
			add_location(picture, file, 53, 36, 2593);
			attr_dev(div1, "class", "img-general-info");
			add_location(div1, file, 43, 32, 1560);
			add_location(b7, file, 59, 35, 2984);
			add_location(p7, file, 59, 32, 2981);
			attr_dev(div2, "class", "location-info");
			add_location(div2, file, 42, 28, 1499);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, p0);
			append_dev(p0, b0);
			append_dev(b0, t0);
			append_dev(b0, t1);
			append_dev(p0, t2);
			append_dev(div0, t3);
			append_dev(div0, p1);
			append_dev(p1, b1);
			append_dev(b1, t4);
			append_dev(b1, t5);
			append_dev(p1, t6);
			append_dev(div0, t7);
			append_dev(div0, p2);
			append_dev(p2, b2);
			append_dev(b2, t8);
			append_dev(b2, t9);
			append_dev(p2, t10);
			append_dev(div0, t11);
			append_dev(div0, p3);
			append_dev(p3, b3);
			append_dev(b3, t12);
			append_dev(b3, t13);
			append_dev(p3, t14);
			append_dev(div0, t15);
			append_dev(div0, p4);
			append_dev(p4, b4);
			append_dev(b4, t16);
			append_dev(b4, t17);
			append_dev(p4, t18);
			append_dev(div0, t19);
			append_dev(div0, p5);
			append_dev(p5, b5);
			append_dev(b5, t20);
			append_dev(b5, t21);
			append_dev(p5, a0);
			append_dev(a0, t22);
			append_dev(div0, t23);
			append_dev(div0, p6);
			append_dev(p6, b6);
			append_dev(b6, t24);
			append_dev(b6, t25);
			append_dev(p6, a1);
			append_dev(a1, t26);
			append_dev(div1, t27);
			append_dev(div1, picture);
			append_dev(picture, source0);
			append_dev(picture, t28);
			append_dev(picture, source1);
			append_dev(picture, t29);
			append_dev(picture, img);
			append_dev(div2, t30);
			append_dev(div2, p7);
			append_dev(p7, b7);
			append_dev(b7, t31);
			append_dev(b7, t32);
			append_dev(p7, t33);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 2 && t0_value !== (t0_value = /*$content*/ ctx[1].name + "")) set_data_dev(t0, t0_value);
			if (dirty & /*$content*/ 2 && t4_value !== (t4_value = /*$content*/ ctx[1].location + "")) set_data_dev(t4, t4_value);

			if (dirty & /*$content*/ 2 && t6_value !== (t6_value = /*$content*/ ctx[1][/*coop*/ ctx[11].location[0][0]] + (/*coop*/ ctx[11].location[0][1] == ""
			? ""
			: ", " + /*$content*/ ctx[1][/*coop*/ ctx[11].location[0][1]]) + "")) set_data_dev(t6, t6_value);

			if (dirty & /*$content*/ 2 && t8_value !== (t8_value = /*$content*/ ctx[1].market + "")) set_data_dev(t8, t8_value);
			if (dirty & /*$content*/ 2 && t10_value !== (t10_value = /*$content*/ ctx[1][/*coop*/ ctx[11].market] + "")) set_data_dev(t10, t10_value);
			if (dirty & /*$content*/ 2 && t12_value !== (t12_value = /*$content*/ ctx[1].workers + "")) set_data_dev(t12, t12_value);
			if (dirty & /*$content*/ 2 && t16_value !== (t16_value = /*$content*/ ctx[1].status + "")) set_data_dev(t16, t16_value);
			if (dirty & /*$content*/ 2 && t18_value !== (t18_value = /*$content*/ ctx[1][/*coop*/ ctx[11].status] + "")) set_data_dev(t18, t18_value);
			if (dirty & /*$content*/ 2 && t20_value !== (t20_value = /*$content*/ ctx[1].website + "")) set_data_dev(t20, t20_value);
			if (dirty & /*$content*/ 2 && t24_value !== (t24_value = /*$content*/ ctx[1].contact + "")) set_data_dev(t24, t24_value);
			if (dirty & /*$content*/ 2 && t26_value !== (t26_value = /*$content*/ ctx[1][/*coop*/ ctx[11].contact[1]] + "")) set_data_dev(t26, t26_value);
			if (dirty & /*$content*/ 2 && t31_value !== (t31_value = /*$content*/ ctx[1].description + "")) set_data_dev(t31, t31_value);
			if (dirty & /*$content*/ 2 && t33_value !== (t33_value = /*$content*/ ctx[1][/*coop*/ ctx[11].description] + "")) set_data_dev(t33, t33_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(42:24) {#each coops as coop}",
		ctx
	});

	return block;
}

// (39:16) {#each Object.entries(coopsByCountry) as [name,coops]}
function create_each_block(ctx) {
	let h4;
	let t0_value = /*$content*/ ctx[1][/*name*/ ctx[7]] + "";
	let t0;
	let t1;
	let div;
	let t2;
	let each_value_1 = /*coops*/ ctx[8];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			h4 = element("h4");
			t0 = text(t0_value);
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			attr_dev(h4, "class", "country-name");
			add_location(h4, file, 39, 20, 1327);
			attr_dev(div, "class", "country-block");
			add_location(div, file, 40, 20, 1395);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h4, anchor);
			append_dev(h4, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 2 && t0_value !== (t0_value = /*$content*/ ctx[1][/*name*/ ctx[7]] + "")) set_data_dev(t0, t0_value);

			if (dirty & /*$content, Object, coopsByCountry*/ 2) {
				each_value_1 = /*coops*/ ctx[8];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, t2);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h4);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(39:16) {#each Object.entries(coopsByCountry) as [name,coops]}",
		ctx
	});

	return block;
}

// (30:0) {#key $loaded}
function create_key_block(ctx) {
	let if_block_anchor;
	let if_block = /*$loaded*/ ctx[0] == 2 && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*$loaded*/ ctx[0] == 2) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_key_block.name,
		type: "key",
		source: "(30:0) {#key $loaded}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let previous_key = /*$loaded*/ ctx[0];
	let key_block_anchor;
	let key_block = create_key_block(ctx);

	const block = {
		c: function create() {
			key_block.c();
			key_block_anchor = empty();
			this.c = noop;
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			key_block.m(target, anchor);
			insert_dev(target, key_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$loaded*/ 1 && safe_not_equal(previous_key, previous_key = /*$loaded*/ ctx[0])) {
				key_block.d(1);
				key_block = create_key_block(ctx);
				key_block.c();
				key_block.m(key_block_anchor.parentNode, key_block_anchor);
			} else {
				key_block.p(ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(key_block_anchor);
			key_block.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $loaded;
	let $content;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('cooperatives-component', slots, []);
	let loaded = writable(0);
	validate_store(loaded, 'loaded');
	component_subscribe($$self, loaded, value => $$invalidate(0, $loaded = value));
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(1, $content = value));
	loadLocaleContent(content, "countries", loaded);
	let locale = loadLocaleContent(content, "cooperatives-component", loaded);

	function mapCallbackCoops(createMap, content) {
		let map = createMap([22, 0], 2);
		addMarkersCoops(map, content);
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<cooperatives-component> was created with unknown prop '${key}'`);
	});

	const func = createMap => mapCallbackCoops(createMap, $content);

	$$self.$capture_state = () => ({
		onMount,
		writable,
		coopsByCountry,
		addMarkersCoops,
		loadLocaleContent,
		loaded,
		content,
		locale,
		mapCallbackCoops,
		$loaded,
		$content
	});

	$$self.$inject_state = $$props => {
		if ('loaded' in $$props) $$invalidate(2, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(3, content = $$props.content);
		if ('locale' in $$props) $$invalidate(4, locale = $$props.locale);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$loaded, $content, loaded, content, locale, mapCallbackCoops, func];
}

class Cooperatives_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';#coops-img{position:absolute;width:10.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.img-general-info{display:flex;align-content:center;width:100%;justify-content:space-between;gap:3rem;align-items:center}.img-general-info>:first-child{flex:none}.coop-logo{position:relative;right:0;max-height:6rem;max-width:100%}.country-name{margin-bottom:1rem}.country-block{margin-bottom:2rem}.location-info{position:relative;margin-bottom:1rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-bottom:1rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}@media only screen and (max-width: 600px){.img-general-info{display:flex;flex-direction:column-reverse;align-content:left;width:100%;gap:1rem;align-items:left;margin-bottom:0rem}.img-general-info>:nth-child(2){width:max-content}.img-general-info>:nth-child(1){width:100%}}</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			instance,
			create_fragment,
			safe_not_equal,
			{},
			null
		);

		if (options) {
			if (options.target) {
				insert_dev(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("cooperatives-component", Cooperatives_component);

export { Cooperatives_component as default };