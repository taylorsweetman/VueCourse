//https://firestore.googleapis.com/v1/projects/workout-app-e5db1/databases/(default)/documents/coaches/c1
//https://firestore.googleapis.com/v1/projects/workout-app-e5db1/databases/(default)/documents/requests/${payload.coachId}

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };

    console.log('newRequest', JSON.stringify(newRequest));
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/workout-app-e5db1/databases/(default)/documents/requests/${payload.coachId}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newRequest)
    });

    console.log(response);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/workout-app-e5db1/databases/(default)/documents/requests/${coachId}`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};