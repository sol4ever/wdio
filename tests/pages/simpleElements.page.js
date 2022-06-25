import Page from './page.js';

class simpleElemPage extends Page {

  get radioButtonFemale() { return $('input[value="female"]') }
  get radioButtonMale() { return $('input[value="male"]') }
  get checkboxBike() { return $('input[value="Bike"]') }
  get checkboxCar() { return $('form[action]') }

  async selectRadioButton() {
    await this.radioButtonFemale.click()
    await expect(this.radioButtonFemale).toBeSelected();

    //Demonstrate how test fail works + error screenshot
    await expect(this.radioButtonMale).toBeSelected({
      message: ' Male radio button is not selected! '
    });
  }

  async selectCheckbox() {
    await this.checkboxBike.click()
    await expect(this.checkboxBike).toBeSelected({
      message: 'Bike checkbox is not selected'
    });
  }

}

export default new simpleElemPage();