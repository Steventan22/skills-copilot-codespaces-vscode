function skillsMember() {
  return {
    addSkill: function (skill) {
      console.log('Skill added:', skill);
    },
    removeSkill: function (skill) {
      console.log('Skill removed:', skill);
    },
  };
}