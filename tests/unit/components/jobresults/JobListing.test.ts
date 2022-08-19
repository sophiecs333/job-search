import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/jobresults/JobListing.vue";
import { Job } from "@/api/types";
import { createJob } from "../../store/utils";

describe("JobListing", () => {
  // const createJobProps = (jobProps = {}) => ({
  //   title: "Vue Developer",
  //   organization: "AirBnB",
  //   locations: ["Indianapolis"],
  //   minimumQualifications: ["Succeed"],
  //   ...jobProps,
  // });

  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const job = createJob({ title: "Vue Programmer" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "AirBnB" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("AirBnB");
  });

  it("renders job locations", () => {
    const job = createJob({ locations: ["Orlando", "Jacksonville"] });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Jacksonville");
  });

  it("renders job qualifications", () => {
    const job = createJob({
      minimumQualifications: ["Code", "Developp"],
    });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to individual job's page", () => {
    const job = createJob({
      id: 15,
    });
    const wrapper = mount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
