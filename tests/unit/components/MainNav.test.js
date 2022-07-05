import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Poogle Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    console.log(navigationMenuItems);
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Poogle",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      ({ name: "ActionButton" });
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      ({ name: "ProfileImage" });
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      ({ name: "ActionButton" });
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      ({ name: "ProfileImage" });
      expect(profileImage.exists()).toBe(true);
    });
  });
});
