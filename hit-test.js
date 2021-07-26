/* jshint esversion:9 */
const arrowURL = 'data:image/webp;base64,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';

class HitTest {
	constructor(renderer, options) {

		this.renderer = renderer;
		this.xrHitTestSource = null;

		renderer.xr.addEventListener("sessionend", () => this.xrHitTestSource = null);
		renderer.xr.addEventListener("sessionstart", () => this.sessionStart(options));
		
		if (this.renderer.xr.isPresenting) {
			this.sessionStart(options);
		}
	}

	async sessionStart(options) {
		this.session = this.renderer.xr.getSession();
		try {
			if (options.space) {
				this.xrHitTestSource = await this.session.requestHitTestSource(options);
			} else if ( options.profile ) {
				this.xrHitTestSource = await this.session.requestHitTestSourceForTransientInput(options);
				this.transient = true;
			} 
		} catch(e) {
			console.warn('Cannot requestHitTestSource Are you missing: webxr="optionalFeatures: hit-test;" from <a-scene>?');
		}
	}

	doHit(frame) {
		if (!this.renderer.xr.isPresenting) return;
		const refSpace = this.renderer.xr.getReferenceSpace();
		const xrViewerPose = frame.getViewerPose(refSpace);

		if (this.xrHitTestSource && xrViewerPose) {

			if (this.transient) {
				const hitTestResults = frame.getHitTestResultsForTransientInput(this.xrHitTestSource);
				if (hitTestResults.length > 0) {
					const results = hitTestResults[0].results;
					if (results.length > 0) {
						const pose = results[0].getPose(refSpace);
						return pose;
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				const hitTestResults = frame.getHitTestResults(this.xrHitTestSource);
				if (hitTestResults.length > 0) {
					const pose = hitTestResults[0].getPose(refSpace);
					return pose;
				} else {
					return false;
				}
			}
		}
	}
}

var tempPos = new THREE.Vector3();
var tempScale = new THREE.Vector3();
var tempRot = new THREE.Quaternion();
var tempMatrixWorld = new THREE.Matrix4();
var tempMatrixForTransform = new THREE.Matrix4();

const hitTestCache = new Map();
AFRAME.registerComponent("ar-hit-test", {
	schema: {
		target: { type: "selector" },
		enabled: { default: true },
		map: { type: 'map' }
	},

	init: function () {
		this.hitTest = null;

		this.el.sceneEl.renderer.xr.addEventListener("sessionend", () => {
			this.hitTest = null;
		});

		this.el.sceneEl.renderer.xr.addEventListener("sessionstart", async () => {
			const renderer = this.el.sceneEl.renderer;
			const session = this.session = renderer.xr.getSession();

			this.bboxMesh.visible = true;

			// Default to selecting through the face
			const viewerSpace = await session.requestReferenceSpace('viewer');
			this.hitTest = new HitTest(renderer, {
				space: viewerSpace
			});

			// These are transient inputs so need to be handled seperately
			const profileToSupport = "generic-touchscreen";
			const transientHitTest = new HitTest(renderer, {
				profile: profileToSupport,
			});

			session.addEventListener('selectstart', ({ inputSource }) => {
				this.bboxMesh.visible = true;
				if (inputSource.profiles[0] === profileToSupport) {
					this.hitTest = transientHitTest;
				} else {
					this.hitTest = hitTestCache.get(inputSource) || new HitTest(renderer, {
						space: inputSource.targetRaySpace
					});
					hitTestCache.set(inputSource, this.hitTest);
				}
			});

			session.addEventListener('selectend', ({ inputSource }) => {
				this.el.emit('select', { inputSource });
				this.bboxMesh.visible = false;
				this.hitTest = null;

				if (this.data.target) {
					const target = this.data.target;				
					target.setAttribute("position", this.bboxMesh.position);
					target.object3D.quaternion.copy(this.bboxMesh.quaternion);
					target.object3D.visible = true;
				}

			});
		});

		this.update = this.update.bind(this);
		this.makeBBox();
	},
	update: function () {
		this.bboxNeedsUpdate = true;
		this.data.target.removeEventListener('model-loaded', this.update);
		this.data.target.addEventListener('model-loaded', this.update);
	},
	makeBBox: function () {
		const texture = new THREE.TextureLoader().load(this.data.map || arrowURL);
		const geometry = new THREE.PlaneGeometry(1, 1);
		geometry.rotateX(-Math.PI/2);
		const material = new THREE.MeshBasicMaterial({
			map: texture,
			transparent: true
		});
		this.bbox = new THREE.Box3();
		this.bboxMesh = new THREE.Mesh(geometry, material);
		this.bboxMesh.visible = false;
		this.el.setObject3D('ar-hit-test', this.bboxMesh);
	},
	tick: function () {
		if (this.bboxNeedsUpdate) {
			this.bboxNeedsUpdate = false;

			if (this.data.target) {
				this.bbox.setFromObject(this.data.target.object3D);
				this.bbox.getCenter(this.bboxMesh.position);
				this.bbox.getSize(this.bboxMesh.scale);
				this.bboxMesh.position.y -= this.bboxMesh.scale.y/2;
			}
		}

		const frame = this.el.sceneEl.frame;
		if (this.hitTest) {
			const pose = this.hitTest.doHit(frame);
			if (pose) {
				this.bboxMesh.visible = true;
				this.bboxMesh.position.copy(pose.transform.position);
				this.bboxMesh.quaternion.copy(pose.transform.orientation);
			}
		}
	},
});
