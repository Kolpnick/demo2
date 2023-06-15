import React, { Component } from "react";
import Github from "./github.svg";
import style from "./Buttons.module.scss";

class Buttons extends Component {
  render() {
    return (
			<div className={style.buttons}>
				<a
					rel='noopener noreferrer'
					target='_blank'
					href='https://github.com/deeppavlov/DeepPavlov'>
					<button className={style.github}>
						<img src={Github} alt='' />
						<p>Github</p>
					</button>
				</a>
				<a
					href='https://ngc.nvidia.com/catalog/containers/partners:deeppavlov'
					rel='noopener noreferrer'
					target='_blank'>
					<button>
						<svg width='40' height='22'>
							<g fill='#77b900'>
								<path d='M 12.406163,6.5667982 V 4.5791291 c 0.19257,-0.013645 0.387407,-0.024255 0.586045,-0.030323 5.435835,-0.1705661 9.00134,4.6704792 9.00134,4.6704792 0,0 -3.851326,5.3489577 -7.980893,5.3489577 -0.59438,0 -1.127344,-0.09628 -1.606492,-0.25699 V 8.2853416 c 2.115957,0.2554734 2.541273,1.1901762 3.813423,3.3105044 l 2.829369,-2.3856539 c 0,0 -2.065168,-2.7085894 -5.546524,-2.7085894 -0.37907,0 -0.741454,0.02653 -1.096268,0.065195 m 0,-6.5649061 v 2.9686141 c 0.194846,-0.015921 0.390441,-0.028048 0.586045,-0.034873 7.559367,-0.2547149 12.483462,6.1979951 12.483462,6.1979951 0,0 -5.656453,6.8779822 -11.54944,6.8779822 -0.539797,0 -1.04547,-0.05004 -1.520067,-0.134176 v 1.835291 c 0.405604,0.05154 0.827127,0.08186 1.26609,0.08186 5.483598,0 9.449404,-2.800316 13.290117,-6.114604 0.636076,0.51018 3.242549,1.749632 3.779314,2.293169 -3.651944,3.056547 -12.161258,5.520275 -16.985275,5.520275 -0.464744,0 -0.912043,-0.02805 -1.350246,-0.07049 v 2.578958 H 33.248832 V 0.0018921 Z m 0,14.3093624 v 1.56618 C 7.3334779,14.973813 5.9256246,9.7014187 5.9256246,9.7014187 c 0,0 2.4358862,-2.6979709 6.4805384,-3.1346205 v 1.7185434 c -0.0038,0 -0.0053,-7.656e-4 -0.0084,-7.656e-4 -2.122025,-0.2547067 -3.7808224,1.727646 -3.7808224,1.727646 0,0 0.9294724,3.33855 3.7891574,4.299025 M 3.3972387,9.4732424 c 0,0 3.0060088,-4.4354764 9.0089243,-4.8941133 V 2.9705062 C 5.7573123,3.5034326 3e-5,9.1336279 3e-5,9.1336279 c 0,0 3.2607459,9.4266161 12.406133,10.2893051 V 17.712725 C 5.6951446,16.868232 3.3972387,9.4732424 3.3972387,9.4732424' />
							</g>
						</svg>
						<p>NGC</p>
					</button>
				</a>
				<a
					href='https://hub.docker.com/r/deeppavlov'
					rel='noopener noreferrer'
					target='_blank'>
					<button>
						<svg width='40' height='22' viewBox='0 0 60 43'>
							<g fill='#6395ca'>
								<path d='M3.757 15.768h6.04v5.873h-6.04V15.77zM11.17 15.768h6.04v5.873h-6.04V15.77zM11.17 8.24h6.04v5.87h-6.04V8.24zM18.58 15.768h6.043v5.873H18.58V15.77zM18.58 8.24h6.043v5.87H18.58V8.24zM25.993 15.768h6.042v5.873h-6.042V15.77zM25.993 8.24h6.042v5.87h-6.042V8.24zM33.405 15.768h6.042v5.873h-6.042V15.77zM25.993.708h6.042V6.58h-6.042V.708zM12.194 30.12c-.93 0-1.684.733-1.684 1.636 0 .902.755 1.635 1.684 1.635.928 0 1.683-.732 1.683-1.634 0-.903-.755-1.637-1.683-1.637' />
								<path d='M58.905 18.806c-2.03-1.138-4.73-1.294-7.03-.636-.283-2.377-1.89-4.46-3.8-5.953l-.758-.593-.638.716c-1.28 1.438-1.66 3.83-1.487 5.666.13 1.35.565 2.722 1.42 3.806-.65.38-1.388.682-2.045.9-1.34.44-2.795.685-4.21.685H.613l-.085.89c-.285 2.972.134 5.947 1.398 8.66l.544 1.078.062.1c3.737 6.17 10.3 8.768 17.452 8.768 13.846 0 25.265-6.01 30.51-18.708 3.505.178 7.09-.83 8.805-4.083l.437-.83-.832-.466zm-46.71 16.056c-1.764 0-3.198-1.394-3.198-3.106 0-1.713 1.434-3.107 3.197-3.107 1.763 0 3.197 1.393 3.197 3.106 0 1.712-1.433 3.106-3.196 3.106z' />
							</g>
						</svg>
						<p>Docker Hub</p>
					</button>
				</a>

				{/* <iframe
                    title="stars"
                    src="https://ghbtns.com/github-btn.html?user=deepmipt&repo=DeepPavlov&type=star&count=true&size=large"
                    frameBorder="0"
                    scrolling="0"
                    width="160px"
                    height="30px"
                  /> */}
			</div>
		)
  }
}
export default Buttons;
