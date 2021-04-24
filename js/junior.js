class Junior {
  constructor(name = 'Jack') {
    this._skills = ['html', 'css', 'javascript'];
    this.name = name;
  }
  addSkills(skill) {
    if (!skill) return;
   return (this.skills = [...this._skills, skill]);
   
    // return this.skills.push(skill);
  }
  get skills() {

    return this._skills
  }
  set skills(skill) {
return (this._skills = [...this._skills, skill]);
  }
  getFilteredSkills(skill) {
    // return this._skills.filter(elem => elem === skill);
    const answer = this._skills.some(elem => elem === skill);
    return answer
      ? 'Да, он знает этот язык'
      : 'Мы можем порекомендовать ознакомиться с этой технологией';
  }
  getSkillsCount() {
    return this._skills.reduce((acc, elem)   => acc + 1, 0);
  }
  getSortCount() {
    return this._skills.sort();
  }
}

const newJunior = new Junior('Ann');
console.log(newJunior);
newJunior.addSkills();
// newJunior.addSkills('react');

newJunior.skills = 'node';
console.log(newJunior.getFilteredSkills('css'));
console.log(newJunior.getFilteredSkills('php'));
console.log(newJunior.getSkillsCount());
console.log(newJunior.getSortCount()); 